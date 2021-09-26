import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"

import { GatsbyImageIfExists } from "@components/Image"
import { Text } from "@components/Typography"

type Props = {
    guest: GatsbyTypes.EpisodeFragment["guest"][0]
}

const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: theme.shape.borderRadius,
    },
}))

function EpisodeGuest({ guest }: Props) {
    const classes = useStyles()
    const { name, instagram, propic } = guest
    const image = (
        <GatsbyImageIfExists className={classes.image} imageAsset={propic} />
    )

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
