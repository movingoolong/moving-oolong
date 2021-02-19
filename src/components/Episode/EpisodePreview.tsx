import React from "react"
import Img from "gatsby-image"
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Grid,
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import moment from "moment"
import { BODY_FONT } from "src/theme"

// Components
import MarkdownContent from "components/General/MarkdownContent"
import TagLink from "components/Posts/TagLink"
import CustomLink from "components/General/CustomLink"
import config from "data/SiteConfig"

// Types
import { EpisodeType } from "hooks/useEpisodes"

const styles = (theme: Theme) =>
    createStyles({
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
            // [theme.breakpoints.only("sm")]: {
            //     fontSize: "14px",
            // },
        },
        date: {
            color: theme.palette.text.primary,
            fontFamily: BODY_FONT,
            margin: 0,
            marginTop: theme.spacing(1),
            // [theme.breakpoints.only("sm")]: {
            //     fontSize: "12px",
            // },
        },
        description: {
            // height: "65px",
            // overflow: "hidden",
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
        tags: {
            // fontSize: "10px",
        },

        button: {
            //marginLeft: "auto",
        },
    })

type Props = WithStyles<typeof styles> & {
    episode: EpisodeType
    showDescription?: boolean
}

function EpisodePreview(props: Props) {
    const { classes, episode, showDescription = true, ...rest } = props

    if (!episode.node.frontmatter)
        throw new Error("Frontmatter does not exist on episode")
    if (!episode.node.fields?.slug) throw new Error("Slug does not exist")
    if (!episode.image.childImageSharp?.fluid)
        throw new Error("Image doesn't exist")

    const { title, tags = [], date } = episode.node.frontmatter
    const { slug } = episode.node.fields

    return (
        <Card className={classes.root} {...rest}>
            <div className={classes.content}>
                <CustomLink className={classes.link} to={slug}>
                    <CardActionArea>
                        <Img
                            fluid={episode.image.childImageSharp?.fluid}
                            alt={`${title} preview image`}
                        />
                        <CardContent className={classes.header}>
                            <h2 className={classes.title}>{title}</h2>
                            <h4 className={classes.date}>
                                {moment(date).format(config.dateFormat)}
                            </h4>
                            {showDescription ? (
                                <MarkdownContent
                                    className={classes.description}
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
                        <div className={classes.tags}>
                            {tags.map((tag = "") => (
                                <TagLink tag={tag} key={tag} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.button}
                            color="secondary"
                            size="small"
                            href={slug}
                        >
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(EpisodePreview)
