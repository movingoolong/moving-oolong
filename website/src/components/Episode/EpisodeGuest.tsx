import React from "react"
import { Grid } from "@mui/material"

import { GatsbyImageIfExists } from "@components/Image"
import { Text } from "@components/Typography"

type Props = {
    guest: GatsbyTypes.EpisodeFragment["guest"][0]
}

function EpisodeGuest({ guest }: Props) {
    const { name, instagram, propic } = guest
    const image = <GatsbyImageIfExists imageAsset={propic} />

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
        >
            <Grid item>
                {instagram ? (
                    <a
                        href={`https://www.instagram.com/${instagram.substring(
                            1
                        )}/`}
                    >
                        {image}
                    </a>
                ) : (
                    image
                )}
            </Grid>
            {name ? (
                <Grid item>
                    <Text>{name}</Text>
                </Grid>
            ) : (
                <></>
            )}
        </Grid>
    )
}

export default EpisodeGuest
