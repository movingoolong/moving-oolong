import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import TagLink from "@components/Posts/TagLink"
import { AnimateOnVisible } from "@components/Layout"
import { AnimatedText } from "@components/Typography"

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
}))

type Props = {
    data: GatsbyTypes.EpisodeFragment
}

function EpisodeContent({ data }: Props) {
    const classes = useStyles()
    const {
        title,
        datetime,
        season,
        guest,
        spotify,
        episodeTags = [],
        image,
        _rawDescription,
        _rawReference,
    } = data

    return (
        <Container>
            <Grid
                container
                alignItems="flex-start"
                justify="center"
                alignContent="stretch"
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
                    <GatsbyImageIfExists imageAsset={image} />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="stretch"
                    justify="space-between"
                    xs={12}
                    sm={6}
                >
                    <Grid item>
                        <SanityContent
                            className={classes.embed}
                            blocks={_rawDescription}
                        />
                    </Grid>
                    <Grid item>
                        <SanityContent blocks={_rawDescription} />
                    </Grid>
                    <Grid item>
                        <div className={classes.tags}>
                            {episodeTags.map((tag) => (
                                <TagLink tag={tag?.value} key={tag?.value} />
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EpisodeContent
