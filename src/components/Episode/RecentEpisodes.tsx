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
import Text from "components/Typography"

import useEpisodes from "hooks/useEpisodes"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
            //marginTop: theme.spacing(1),
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
            // fontSize: "16px",
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
                    <Text variant="h2" className={classes.title}>Recent Episodes</Text>
                </Grid>
                <Grid>
                    <CustomLink className={classes.link} to="/episodes">
                        <Text variant="subtitle1" color="textPrimary">See all episodes</Text>
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
