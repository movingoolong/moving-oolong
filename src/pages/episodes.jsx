import React, { useState } from "react"
import { Helmet } from "react-helmet"
import {
    Button,
    Hidden,
    SwipeableDrawer,
    Grid,
    withStyles,
} from "@material-ui/core"
import { useQueryParam, StringParam } from "use-query-params"

// Components
import EpisodePageHeader from "components/EpisodePage/EpisodePageHeader"
import EpisodeGrid from "components/Episode/EpisodeGrid"
import TagSelectionInput from "components/EpisodePage/TagSelectionInput"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SEO from "components/General/SEO"

// Hooks
import useTags from "hooks/useTags"
import useEpisodes from "hooks/useEpisodes"

// Images

const styles = (theme) => ({
    root: {},
})

// const onClick = () => {
//   navigate("/episodes?tags=Hello,My,Name,Is", {
//     search: ""
//   });
// }

export default withStyles(styles)((props) => {
    const { classes, location } = props
    const [urlTags, setURLTags] = useQueryParam("tags", StringParam)
    const tags = useTags(urlTags)
    const episodes = useEpisodes(tags)

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }

        setDrawer(open)
    }

    return (
        <>
            <SEO title={"Episodes"} />
            <EpisodePageHeader />
            <Grid container alignItems="flex-start" justify="center">
                <Hidden smUp>
                    <Button
                        onClick={toggleDrawer(true)}
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        startIcon={<ExpandMoreIcon />}
                    >
                        Filters
                    </Button>
                    <SwipeableDrawer
                        anchor="top"
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        elevation={16}
                    >
                        <TagSelectionInput
                            tags={tags}
                            urlTags={urlTags}
                            setURLTags={setURLTags}
                        />
                    </SwipeableDrawer>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} lg={2}>
                        <TagSelectionInput
                            tags={tags}
                            urlTags={urlTags}
                            setURLTags={setURLTags}
                        />
                    </Grid>
                </Hidden>

                <Grid item xs={12} sm={9} lg={10}>
                    <EpisodeGrid episodes={episodes} showDescription />
                </Grid>
            </Grid>
        </>
    )
})
