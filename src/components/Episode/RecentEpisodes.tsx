import React from "react"
import {
    Grid,
    Hidden,
    withStyles,
    Theme,
    createStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import EpisodeGrid from "./EpisodeGrid"
import SwipeableEpisodes from "./SwipeableEpisodes"
import CustomLink from "components/General/CustomLink"

import useEpisodes from "hooks/useEpisodes"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(1),
        },
        title: {
            textAlign: "left",
            color: theme.palette.primary.main,
            margin: theme.spacing(2),
            marginBottom: 0,
        },
        link: {
            textAlign: "right",
            color: theme.palette.primary.dark,
            fontSize: "16px",
            margin: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles>

function RecentPosts(props: Props) {
    const { classes } = props
    const episodes = useEpisodes()
    return (
        <div className={classes.root}>
            <Grid container alignItems="flex-end" justify="space-between">
                <Grid item xs={12} sm={8}>
                    <h1 className={classes.title}>Recent Episodes</h1>
                </Grid>
                <Grid>
                    <CustomLink className={classes.link} to="/episodes">
                        <i>See all episodes</i>
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

export default withStyles(styles)(RecentPosts)
