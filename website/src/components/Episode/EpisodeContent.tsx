import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import { AnimateOnVisible } from "@components/Layout"
import { AnimatedText, Text } from "@components/Typography"
import { Spotify } from "@components/Spotify"
import TagLink from "./TagLink"
import EpisodeGuest from "./EpisodeGuest"

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2),
    },
    embed: {
        width: "100%",
    },
    tags: {
        color: theme.palette.secondary.main,
    },
    content: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    image: {
        borderRadius: theme.shape.borderRadius,
    },
    references: {
        textAlign: "left",
    },
}))

type Props = {
    episode: GatsbyTypes.EpisodeFragment
}

function EpisodeContent({ episode }: Props) {
    const classes = useStyles()
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
        <Container className={classes.content}>
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
                                className={classes.title}
                                align="center"
                                color="primary"
                                style={styleProps}
                            >
                                {title}
                            </AnimatedText>
                        )}
                    </AnimateOnVisible>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <GatsbyImageIfExists
                        className={classes.image}
                        imageAsset={image}
                    />
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
                        <div className={classes.tags}>
                            {tags.map((tag) => (
                                <TagLink tag={tag?.value} key={tag?.value} />
                            ))}
                        </div>
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
                        className={classes.references}
                        direction="column"
                        alignItems="stretch"
                        justifyContent="space-between"
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
