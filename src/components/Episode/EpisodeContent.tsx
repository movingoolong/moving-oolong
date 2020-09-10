import React from "react"
import Img from "gatsby-image"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { animated as a } from "react-spring"

// Components
import TagLink from "components/Posts/TagLink"
import MarkdownContent from "components/General/MarkdownContent"
import AnimateOnVisible from "components/General/AnimateOnVisible"

const styles = (theme: Theme) =>
    createStyles({
        root: {},
        title: {
            textAlign: "center",
            fontSize: "48px",
            color: theme.palette.primary.main,
            [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
            },
        },
        embed: {
            width: "100%",
        },
        body: {
            fontSize: "16px",
            color: theme.palette.secondary.main,
            "& a": {
                color: theme.palette.secondary.dark,
            },
        },
        tags: {
            color: theme.palette.secondary.main,
            fontSize: "12px",
        },
    })

type Props = WithStyles<typeof styles> & {
    episode: GatsbyTypes.EpisodeFragment
    img: GatsbyTypes.FluidImageFragment
}

function EpisodeContent(props: Props) {
    const { classes, episode, img } = props

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
                            <a.h1 className={classes.title} style={styleProps}>
                                {title}
                            </a.h1>
                        )}
                    </AnimateOnVisible>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Img
                        fluid={img.childImageSharp?.fluid}
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
                        <MarkdownContent
                            className={classes.body}
                            content={episode.html}
                        />
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

export default withStyles(styles)(EpisodeContent)
