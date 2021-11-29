import React from "react"
import {
    Box,
    Grid,
    useMediaQuery,
    useTheme,
} from "@mui/material"

// Components
import EpisodeGrid from "./EpisodeGrid"
import SwipeableEpisodes from "./SwipeableEpisodes"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"

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

type Props = {
    episodes: GatsbyTypes.EpisodeFragment[]
}

export default function RecentPosts({ episodes }: Props) {
    const numShown = useSizing()
    return (
        <Box sx={{
            marginLeft: 3,
            marginRight: 3,
        }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm={8}>
                    <Text variant="h2" color="primary" sx={{
                        textAlign: {xs: "center", sm: "left" },
                        margin: 2, // theme.spacing(2),
                    }}>
                        Recent Episodes
                    </Text>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <CustomLink to="/episodes">
                        <Text
                            variant="subtitle1"
                            color="textPrimary"
                            sx={{
                                textAlign: {xs: "center", sm: "right", },
                                textDecoration: "underline",
                                margin: 2, // theme.spacing(2),
                                marginTop: {
                                    xs: 0,
                                    sm: 2,
                                },
                                marginBottom: {
                                    xs: 0,
                                    sm: 2
                                }
                            }}
                        >
                            See all episodes
                        </Text>
                    </CustomLink>
                </Grid>
            </Grid>

            <Box sx={{
                display: {
                    xs: "none",
                    sm: "block",
                }
            }}>
                <SwipeableEpisodes
                    episodes={episodes.slice(0, numShown * 2)}
                    numShown={numShown}
                />
            </Box>
            <Box sx={{
                display: {
                    xs: "block",
                    sm: "none",
                }
            }}>
                <EpisodeGrid
                    episodes={episodes.slice(0, 3)}
                    showDescription={false}
                />
            </Box>
        </Box>
    )
}
