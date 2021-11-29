import React, { useState, FormEvent, SyntheticEvent } from "react"
import { PageProps, graphql } from "gatsby"
import { Button, Hidden, SwipeableDrawer, Grid } from "@mui/material"
import { ExpandMore, TagFacesRounded } from "@mui/icons-material"
import { useQueryParam, StringParam } from "use-query-params"

// Components
import EpisodePageHeader from "@components/EpisodePage/EpisodePageHeader"
import EpisodeGrid from "@components/Episode/EpisodeGrid"
import TagSelectionInput from "@components/EpisodePage/TagSelectionInput"

import SEO from "@components/General/SEO"

// Hooks
import useTags, { getArrayFromTags } from "@hooks/useTags"

type Props = PageProps<GatsbyTypes.EpisodePageQuery>

export default function EpisodePage({ data }: Props) {
    const [urlTags, setURLTags] = useQueryParam("tags", StringParam)
    const [tags, tagsArray] = useTags(urlTags)
    let episodes = data.allSanityEpisode.nodes
    if (tagsArray.length > 0) {
        episodes = episodes.filter(
            ({ tags }: GatsbyTypes.EpisodeFragment) => {
                if (!tags) return false
                let episodeTagsArray = tags.map((e) => e?.value)

                return episodeTagsArray.some((tag) =>
                    tag ? tagsArray.includes(tag) : false
                )
            }
        )
    }

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open: boolean) => (event: SyntheticEvent) => {
        // if (
        //     event &&
        //     event.type === "keydown" &&
        //     (event.key === "Tab" || event.key === "Shift")
        // ) {
        //     return
        // }

        setDrawer(open)
    }

    return (
        <>
            <SEO title={"Episodes"} />
            <EpisodePageHeader />
            <Grid container alignItems="flex-start" justifyContent="center">
                <Hidden smUp>
                    <Button
                        onClick={toggleDrawer(true)}
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        startIcon={<ExpandMore />}
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
                            tags={TagFacesRounded}
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
}

export const query = graphql`
    query EpisodesPage {
        allSanityEpisode(sort: { fields: datetime, order: DESC }) {
            nodes {
                ...Episode
            }
        }
    }
`
