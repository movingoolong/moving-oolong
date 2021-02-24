import React from "react"
import {
    Grid,
    Hidden,
    makeStyles,
    useMediaQuery,
    useTheme,
} from "@material-ui/core"

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
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
    },
    seeAll: {
        textAlign: "right",
        textDecoration: "underline",
        margin: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            marginTop: 0,
            marginBottom: 0,
        },
    },
}))

const useSizing = () => {
    const theme = useTheme()

    // Have to calculate all cause hooks can't be conditional
    const isLarge = useMediaQuery(theme.breakpoints.up("xl"))
    const isMedium = useMediaQuery(theme.breakpoints.up("md"))

    if (isLarge) {
        return 4
    } else if (isMedium) {
        return 3
    } else {
        return 2
    }
}

export default function RecentPosts() {
    const classes = useStyles()
    const episodes = useEpisodes()
    const numShown = useSizing()
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item xs={12} sm={8}>
                    <Text variant="h2" className={classes.title}>
                        Recent Episodes
                    </Text>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CustomLink to="/episodes">
                        <Text
                            variant="subtitle1"
                            color="textPrimary"
                            className={classes.seeAll}
                        >
                            See all episodes
                        </Text>
                    </CustomLink>
                </Grid>
            </Grid>

            <Hidden xsDown>
                <SwipeableEpisodes
                    episodes={episodes.slice(0, numShown * 2)}
                    numShown={numShown}
                />
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
