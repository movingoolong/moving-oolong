import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Grid,
    makeStyles,
} from "@material-ui/core"
import moment from "moment"
import { animated, useSpring, config as springConfig } from "react-spring"
import { BODY_FONT } from "src/theme"

// Components
import MarkdownContent from "components/General/MarkdownContent"
import TagLink from "components/Posts/TagLink"
import CustomLink from "components/General/CustomLink"
import config from "data/SiteConfig"
import Text from "components/Typography"

// Hooks
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

// Types
import { EpisodeType } from "hooks/useEpisodes"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(0),
        },
    },
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    header: {
        paddingBottom: 0,
    },
    link: {
        color: "#ffffff",
    },
    title: {
        color: theme.palette.primary.main,
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
    },
    date: {
        color: theme.palette.text.primary,
        fontFamily: BODY_FONT,
        margin: 0,
        marginTop: theme.spacing(1),
    },
    action: {
        //display: "flex",
        flexGrow: 1,
        margin: 0,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingTop: 0,
    },
    grow: {
        flexGrow: 1,
    },
}))

type Props = {
    episode: EpisodeType
    showDescription?: boolean
}

const AnimatedCard = animated(Card)

function EpisodePreview({ episode, showDescription = true, ...rest }: Props) {
    const classes = useStyles()

    const [isHover, setHover] = useState(false)
    const springStyle = useSpring({
        to: {
            transform: isHover ? "scale(1.05)" : "scale(1.0)",
        },
        immediate: usePrefersReducedMotion(),
        config: springConfig.wobbly,
    })

    if (!episode.node.frontmatter)
        throw new Error("Frontmatter does not exist on episode")
    if (!episode.node.fields?.slug) throw new Error("Slug does not exist")
    if (!episode.image.childImageSharp?.gatsbyImageData)
        throw new Error("Image doesn't exist")

    const { title, tags = [], date } = episode.node.frontmatter
    const { slug } = episode.node.fields

    return (
        <AnimatedCard
            className={classes.root}
            {...rest}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={springStyle}
        >
            <div className={classes.content}>
                <CustomLink className={classes.link} to={slug}>
                    <CardActionArea>
                        <GatsbyImage
                            image={episode.image?.childImageSharp?.gatsbyImageData}
                            alt={`${title} preview image`} />
                        <CardContent className={classes.header}>
                            <Text variant="h6" className={classes.title}>
                                {title}
                            </Text>
                            <Text variant="subtitle2" color="textPrimary">
                                {moment(date).format(config.dateFormat)}
                            </Text>
                            {showDescription ? (
                                <MarkdownContent
                                    content={episode.node.excerpt}
                                />
                            ) : (
                                <></>
                            )}
                        </CardContent>
                    </CardActionArea>
                </CustomLink>
            </div>

            <CardActions className={classes.action}>
                <Grid container alignItems="flex-end" justify="space-between">
                    <Grid item xs={6}>
                        {tags.map((tag = "") => (
                            <TagLink tag={tag} key={tag} />
                        ))}
                    </Grid>
                    <Grid item>
                        <Button color="secondary" size="small" href={slug}>
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </AnimatedCard>
    );
}

export default EpisodePreview
