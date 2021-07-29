import React from "react"
import { Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import SocialIcons from "./SocialIcons"

// Components
import Text from "@components/Typography/Text"
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"

// Types

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
    bio: GatsbyTypes.BioFragment
}

function Bio({ bio }: Props) {
    const classes = useStyles()
    const { name, instagram, twitter, propic, _rawDescription } = bio

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <GatsbyImageIfExists imageAsset={propic} />
                <CardContent>
                    <Text
                        variant="h6"
                        align="center"
                        className={classes.title}
                        color="secondary"
                    >
                        {name}
                    </Text>
                    <SanityContent blocks={_rawDescription} />
                </CardContent>
            </div>
            <CardActions disableSpacing className={classes.socials}>
                <SocialIcons instagram={instagram} twitter={twitter} />
            </CardActions>
        </Card>
    )
}

export default Bio
