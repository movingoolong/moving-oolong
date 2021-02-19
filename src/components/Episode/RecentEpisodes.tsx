import React from "react"
import { Grid, Hidden, makeStyles } from "@material-ui/core"

// Components
import EpisodeGrid from "./EpisodeGrid"
import SwipeableEpisodes from "./SwipeableEpisodes"
import CustomLink from "components/General/CustomLink"
import Text from "components/Typography"

import useEpisodes from "hooks/useEpisodes"

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    title: {
        textAlign: "left",
        color: theme.palette.primary.main,
        margin: theme.spacing(2),
    },
    link: {
        margin: theme.spacing(2),
    },
}))

export default function RecentPosts() {
    const classes = useStyles()
    const episodes = useEpisodes()
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item xs={12} sm={8}>
                    <Text variant="h2" className={classes.title}>
                        Recent Episodes
                    </Text>
                </Grid>
                <Grid>
                    <CustomLink className={classes.link} to="/episodes">
                        <Text
                            variant="subtitle1"
                            color="textPrimary"
                            align="right"
                        >
                            See all episodes
                        </Text>
                    </CustomLink>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <SwipeableEpisodes episodes={episodes.slice(0, 8)} />
            </Hidden>
            <Hidden smUp>
                <EpisodeGrid
                    episodes={episodes.slice(0, 3)}
                    showDescription={false}
                />
            </Hidden>
        </div>
    )
}
