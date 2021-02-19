import React from "react"
import Img from "gatsby-image"
import { Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import SocialIcons from "./SocialIcons"

// Components
import MarkdownContent from "components/General/MarkdownContent"
import Text from "components/Typography/Text"

// Types
import { BioType } from "hooks/useBios"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    title: {
        fontWeight: 700,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    socials: {
        flexGrow: 1,
        marginLeft: "auto",
        marginRight: "auto",
    },
}))

type Props = {
    bio: BioType
}

function Bio({ bio }: Props) {
    const classes = useStyles()
    if (!bio.node.frontmatter)
        throw new Error("Frontmatter does not exist on bio")
    if (!bio.image.childImageSharp?.fluid)
        throw new Error(`Image does not exist`)

    const { name, instagram, twitter } = bio.node.frontmatter

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Img
                    fluid={bio.image.childImageSharp?.fluid}
                    alt={`${name} bio image`}
                />
                <CardContent>
                    <Text
                        variant="h6"
                        align="center"
                        className={classes.title}
                        color="secondary"
                    >
                        {name}
                    </Text>
                    <MarkdownContent content={bio.node.html} />
                </CardContent>
            </div>
            <CardActions disableSpacing className={classes.socials}>
                <SocialIcons instagram={instagram} twitter={twitter} />
            </CardActions>
        </Card>
    )
}

export default Bio
