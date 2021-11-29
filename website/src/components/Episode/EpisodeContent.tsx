import React from "react"
import { Box, Container, Grid } from "@mui/material"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import { AnimateOnVisible } from "@components/Layout"
import { AnimatedText, Text } from "@components/Typography"
import { Spotify } from "@components/Spotify"
import TagLink from "./TagLink"
import EpisodeGuest from "./EpisodeGuest"

type Props = {
    episode: GatsbyTypes.EpisodeFragment
}

function EpisodeContent({ episode }: Props) {
    const {
        title,
        datetime,
        season,
        guest,
        spotify,
        tags = [],
        image,
        _rawDescription,
        _rawReferences,
    } = episode

    return (
        <Container
            sx={{
                marginTop: 2, // theme.spacing(2),
                marginBottom: 4, // theme.spacing(4),
            }}
        >
            <Grid
                container
                alignItems="flex-start"
                justifyContent="center"
                alignContent="center"
                spacing={2}
            >
                <Grid item xs={12}>
                    <AnimateOnVisible once>
                        {(styleProps) => (
                            <AnimatedText
                                variant="h1"
                                align="center"
                                color="primary"
                                style={styleProps}
                                sx={{
                                    margin: 2, // theme.spacing(2)
                                }}
                            >
                                {title}
                            </AnimatedText>
                        )}
                    </AnimateOnVisible>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GatsbyImageIfExists imageAsset={image} />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="stretch"
                    justifyContent="space-between"
                    xs={12}
                    sm={6}
                    spacing={1}
                >
                    <Grid item>
                        <Spotify src={spotify} />
                    </Grid>
                    <Grid item>
                        <SanityContent blocks={_rawDescription} />
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{
                                color: "secondary.main",
                            }}
                        >
                            {tags.map((tag) => (
                                <TagLink tag={tag?.value} key={tag?.value} />
                            ))}
                        </Box>
                    </Grid>
                    {/* {guest && guest.length > 0 ? (
                        <Grid
                            item
                            container
                            alignItems="stretch"
                            justifyContent="center"
                            spacing={1}
                        >
                            {guest.map((g) => (
                                <Grid item xs={3}>
                                    <EpisodeGuest guest={g} />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <></>
                    )} */}
                </Grid>
                {_rawReferences && _rawReferences.length > 0 ? (
                    <Grid
                        item
                        container
                        xs={6}
                        direction="column"
                        alignItems="stretch"
                        justifyContent="space-between"
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <Text variant="h3" align="center" color="primary">
                            References
                        </Text>
                        <SanityContent blocks={_rawReferences} />
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </Container>
    )
}

export default EpisodeContent
