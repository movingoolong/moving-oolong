import React, { useState } from "react"
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardActions,
    Grid,
} from "@mui/material"
import { animated, useSpring, config } from "react-spring"
import { BODY_FONT } from "../../theme"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"
import TagLink from "./TagLink"
import Button from "@components/Button"

// Types
type Props = {
    episode: GatsbyTypes.EpisodeFragment
    showDescription?: boolean
}

const AnimatedCard = animated(Card)

function EpisodePreview({ episode, showDescription = true, ...rest }: Props) {
    const { title, datetime, tags = [], image, slug, _rawDescription } = episode
    const slugLink = slug?.current
    const [isHover, setHover] = useState(false)
    const springStyle = useSpring({
        to: {
            transform: isHover ? "scale(1.02)" : "scale(1.0)",
        },
        config: config.wobbly,
    })

    return (
        <AnimatedCard
            sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                margin: {
                    xs: 0, // theme.spacing(0)
                    md: 1, // theme.spacing(1),
                },
            }}
            {...rest}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={springStyle}
        >
            <Box
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 1,
                }}
            >
                <CustomLink sx={{ color: "#ffffff" }} to={slugLink || ""}>
                    <CardActionArea>
                        <GatsbyImageIfExists imageAsset={image} />
                        <CardContent
                            sx={{
                                paddingBottom: 0,
                                color: "text.primary",
                            }}
                        >
                            <Text
                                variant="h6"
                                color="primary"
                                sx={{
                                    marginTop: 0,
                                    marginBottom: 0,
                                    padding: 0,
                                }}
                            >
                                {title}
                            </Text>
                            {datetime ? (
                                <Text variant="subtitle2" color="textPrimary">
                                    {datetime}
                                </Text>
                            ) : (
                                <></>
                            )}

                            {showDescription && _rawDescription ? (
                                <SanityContent
                                    blocks={_rawDescription.slice(0, 1)}
                                />
                            ) : (
                                <></>
                            )}
                        </CardContent>
                    </CardActionArea>
                </CustomLink>
            </Box>

            <CardActions
                sx={{
                    flexGrow: 1,
                    margin: 0,
                    marginLeft: 1, // theme.spacing(1),
                    marginRight: 1, // theme.spacing(1),
                    paddingTop: 0,
                }}
            >
                <Grid
                    container
                    alignItems="flex-end"
                    justifyContent="space-between"
                >
                    <Grid item xs={6}>
                        {tags.map((tag) => (
                            <TagLink tag={tag?.value} key={tag?.value} />
                        ))}
                    </Grid>
                    <Grid item>
                        <Button color="secondary" size="small" to={slugLink}>
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </AnimatedCard>
    )
}

export default EpisodePreview
