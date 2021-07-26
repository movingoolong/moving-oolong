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
import dayjs from "dayjs"
import { animated } from "react-spring"
import { BODY_FONT } from "../../theme"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import TagLink from "@components/Posts/TagLink"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"

import useBoop from "@hooks/useBoop"

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
    const [boopStyle, trigger] = useBoop({ scale: 1.05 })
    const {
        title,
        datetime,
        episodeTags,
        image,
        slug,
        _rawDescription,
        _rawReference,
    } = episode
    const slugLink = slug?.current
    console.log(episode)

    return (
        <AnimatedCard
            className={classes.root}
            {...rest}
            onMouseEnter={trigger}
            style={boopStyle}
        >
            <div className={classes.content}>
                <CustomLink className={classes.link} to={slugLink}>
                    <CardActionArea>
                        <GatsbyImageIfExists imageAsset={image} />
                        <CardContent className={classes.header}>
                            {/* <Text variant="h6" className={classes.title}>
                                {title}
                            </Text>
                            <Text variant="subtitle2" color="textPrimary">
                                {dayjs(datetime)}
                            </Text>
                            {showDescription ? (
                                <SanityContent blocks={_rawDescription} />
                            ) : (
                                <></>
                            )} */}
                        </CardContent>
                    </CardActionArea>
                </CustomLink>
            </div>

            <CardActions className={classes.action}>
                <Grid container alignItems="flex-end" justify="space-between">
                    {/* <Grid item xs={6}>
                        {tags.map((tag = "") => (
                            <TagLink tag={tag} key={tag} />
                        ))}
                    </Grid> */}
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
