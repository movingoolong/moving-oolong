import React from "react"
import { IconButton, Grid, makeStyles } from "@material-ui/core"

import Text from "components/Typography"

// Images
import apple from "assets/img/icons/apple_podcasts.png"
import spotify from "assets/img/icons/spotify.png"
import stitcher from "assets/img/icons/stitcher.png"
import soundcloud from "assets/img/icons/soundcloud.png"
import googleplay from "assets/img/icons/google-play-music.png"
import breaker from "assets/img/icons/breaker.png"
import radiopublic from "assets/img/icons/radiopublic.png"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    spacing: {
        marginTop: theme.spacing(1),
    }
}))

const ICONS = [
    {
        href:
            "https://open.spotify.com/show/02UAHtTye0bhzUPuNFM1HE?si=vkorccKzRi-IY75Dre5I-w",
        src: spotify,
        alt: "Spotify link",
    },
    {
        href:
            "https://podcasts.apple.com/us/podcast/moving-oolong/id1490732891",
        src: apple,
        alt: "Apple podcasts link",
    },
    {
        href: "https://soundcloud.com/moving-oolong",
        src: soundcloud,
        alt: "Soundcloud link",
    },
    {
        href: "https://www.stitcher.com/podcast/moving-oolong?refid=stpr",
        src: stitcher,
        alt: "Stitcher link",
    },
    {
        href:
            "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xOWM3MTc5NC9wb2RjYXN0L3Jzcw==",
        src: googleplay,
        alt: "Google podcasts link",
    },
    {
        href: "https://www.breaker.audio/moving-oolong",
        src: breaker,
        alt: "Breaker link",
    },
    {
        href: "https://radiopublic.com/moving-oolong-6p0d2Q",
        src: radiopublic,
        alt: "Radio Public link",
    },
]

function EpisodePageContent() {
    const classes = useStyles()
    return (
        <Grid
            container
            className={classes.root}
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <Text variant="h2" align="center" color="primary">
                    New episodes drop every Monday morning!
                </Text>
            </Grid>

            <Grid item xs={12} className={classes.spacing}>
                <Text variant="h3" align="center" color="textPrimary">
                    Listen on
                </Text>
            </Grid>

            {ICONS.map(({ href, src, alt }) => (
                <Grid item>
                    <IconButton href={href}>
                        <img src={src} alt={alt} />
                    </IconButton>
                </Grid>
            ))}
        </Grid>
    )
}

export default EpisodePageContent
