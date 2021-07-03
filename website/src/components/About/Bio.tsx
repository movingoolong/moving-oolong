import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import SocialIcons from "./SocialIcons"

// Components
import Text from "@components/Typography/Text"

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
    bio: any
}

function Bio({ bio }: Props) {
    return <></>
    // const classes = useStyles()
    // const image = getImage(bio.image)
    // if (!bio.node.frontmatter)
    //     throw new Error("Frontmatter does not exist on bio")
    // if (!image) throw new Error(`Image does not exist`)

    // const { name, instagram, twitter } = bio.node.frontmatter

    // return (
    //     <Card className={classes.root}>
    //         <div className={classes.content}>
    //             <GatsbyImage image={image} alt={`${name} bio image`} />
    //             <CardContent>
    //                 <Text
    //                     variant="h6"
    //                     align="center"
    //                     className={classes.title}
    //                     color="secondary"
    //                 >
    //                     {name}
    //                 </Text>
    //                 <MarkdownContent content={bio.node.html} />
    //             </CardContent>
    //         </div>
    //         <CardActions disableSpacing className={classes.socials}>
    //             <SocialIcons instagram={instagram} twitter={twitter} />
    //         </CardActions>
    //     </Card>
    // )
}

export default Bio
