import React, { useState } from "react"
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Grid,
    makeStyles,
} from "@material-ui/core"
import { animated, useSpring, config } from "react-spring"
import { BODY_FONT } from "../../theme"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"
import TagLink from "./TagLink"

// Types
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
        color: theme.palette.text.primary,
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
    episode: GatsbyTypes.EpisodeFragment
    showDescription?: boolean
}

const AnimatedCard = animated(Card)

function EpisodePreview({ episode, showDescription = true, ...rest }: Props) {
    const classes = useStyles()
    const {
        title,
        datetime,
        tags = [],
        image,
        slug,
        _rawDescription,
    } = episode
    const slugLink = slug?.current
    const [isHover, setHover] = useState(false)
    const springStyle = useSpring({
        to: {
            transform: isHover ? "scale(1.02)" : "scale(1.0)",
        },
        config: config.wobbly,
    })

    return (
        <AnimatedCard
            className={classes.root}
            {...rest}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={springStyle}
        >
            <div className={classes.content}>
                <CustomLink className={classes.link} to={slugLink || ""}>
                    <CardActionArea>
                        <GatsbyImageIfExists imageAsset={image} />
                        <CardContent className={classes.header}>
                            <Text variant="h6" className={classes.title}>
                                {title}
                            </Text>
                            {datetime ? (
                                <Text variant="subtitle2" color="textPrimary">
                                    {datetime}
                                </Text>
                            ) : (
                                <></>
                            )}

                            {showDescription && _rawDescription ? (
                                <SanityContent
                                    blocks={_rawDescription.slice(0, 1)}
                                />
                            ) : (
                                <></>
                            )}
                        </CardContent>
                    </CardActionArea>
                </CustomLink>
            </div>

            <CardActions className={classes.action}>
                <Grid
                    container
                    alignItems="flex-end"
                    justifyContent="space-between"
                >
                    <Grid item xs={6}>
                        {tags.map((tag) => (
                            <TagLink tag={tag?.value} key={tag?.value} />
                        ))}
                    </Grid>
                    <Grid item>
                        <Button color="secondary" size="small" href={slugLink}>
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </AnimatedCard>
    )
}

export default EpisodePreview
