import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Grid, makeStyles } from "@material-ui/core"

// Components
import TagLink from "@components/Posts/TagLink"
import MarkdownContent from "@components/General/MarkdownContent"
import AnimateOnVisible from "@components/General/AnimateOnVisible"
import { AnimatedText } from "@components/Typography"

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2),
    },
    embed: {
        width: "100%",
    },
    tags: {
        color: theme.palette.secondary.main,
    },
}))

type Props = {
    episode: GatsbyTypes.EpisodeFragment
    img: GatsbyTypes.FluidImageFragment
}

function EpisodeContent({ episode, img }: Props) {
    const classes = useStyles()

    if (!episode.frontmatter)
        throw new Error("Episode frontmatter doesn't exist")
    const { title, tags = [], link } = episode.frontmatter

    return (
        <Container>
            <Grid
                container
                alignItems="flex-start"
                justify="center"
                alignContent="stretch"
                spacing={2}
            >
                <Grid item xs={12}>
                    <AnimateOnVisible once>
                        {(styleProps) => (
                            <AnimatedText
                                variant="h1"
                                className={classes.title}
                                align="center"
                                color="primary"
                                style={styleProps}
                            >
                                {title}
                            </AnimatedText>
                        )}
                    </AnimateOnVisible>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GatsbyImage
                        image={getImage(img)}
                        alt={`${title} episode image`}
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="stretch"
                    justify="space-between"
                    xs={12}
                    sm={6}
                >
                    <Grid item>
                        <MarkdownContent
                            className={classes.embed}
                            content={link}
                        />
                    </Grid>
                    <Grid item>
                        <MarkdownContent content={episode.html} />
                    </Grid>
                    <Grid item>
                        <div className={classes.tags}>
                            {tags.map((tag = "") => (
                                <TagLink tag={tag} key={tag} />
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EpisodeContent
