import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Grid, makeStyles } from "@material-ui/core"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated } from "react-spring"
import { BODY_FONT } from "../theme"

// Components
import Bio from "@components/About/Bio"
import SEO from "@components/General/SEO"
import Text, { AnimatedText } from "@components/Typography"
import AnimateOnVisible from "@components/General/AnimateOnVisible"

const AnimatedGrid = animated(Grid)

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    item: {
        marginTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.primary.main,
        margin: theme.spacing(4),
    },
    description: {
        marginBottom: theme.spacing(4),
        fontFamily: BODY_FONT,
    },
}))

export const query = graphql`
    query AboutPageQuery {
        sanitySiteSettings {
            _rawAboutPageDescription
            _rawAboutPageHeader
        }
        allSanityBio(filter: {isGuest: {eq: false}}) {
            nodes {
                ...Bio
            }
        }
    }
`

type Props = {
    data: GatsbyTypes.AboutPageQuery
}

export default function AboutPage({ data }: Props) {
    const classes = useStyles()
    const { sanitySiteSettings, allSanityBio } = data
    const [isVisible, setIsVisible] = useState(false)
    const trails = useTrail(bios.length, {
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
    })
    return (
        <>
            <SEO title="About" />
            <Container maxWidth="lg">
                <AnimateOnVisible once>
                    {(springStyle) => (
                        <AnimatedText
                            variant="h5"
                            align="center"
                            className={classes.title}
                            style={springStyle}
                        >
                            <b>
nice
                            </b>
                        </AnimatedText>
                    )}
                </AnimateOnVisible>

                <Text
                    variant="subtitle1"
                    align="center"
                    color="textPrimary"
                    className={classes.description}
                >
                    <b>subtitle</b>
                </Text>

                <VisibilitySensor
                    onChange={(isVisible) => setIsVisible(isVisible)}
                    active={!isVisible}
                    partialVisibility
                >
                    <Grid
                        container
                        spacing={3}
                        justify="center"
                        alignItems="stretch"
                    >
                        {allSanityBio.nodes.map((bio, index) => (
                            <AnimatedGrid
                                item
                                className={classes.item}
                                xs={12}
                                sm={4}
                                key={index}
                                style={trails[index]}
                            >
                                <Bio bio={bio} />
                            </AnimatedGrid>
                        ))}
                    </Grid>
                </VisibilitySensor>
            </Container>
        </>
    )
}
