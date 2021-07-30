import React, { useState } from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Grid, makeStyles } from "@material-ui/core"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated } from "react-spring"
import { BODY_FONT } from "../theme"

// Components
import Bio from "@components/About/Bio"
import SEO from "@components/General/SEO"
import Text, { AnimatedText } from "@components/Typography"
import { AnimateOnVisible } from "@components/Layout"
import SanityContent from "@components/SanityContent"

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
        textAlign: "center",
        margin: theme.spacing(4),
    },
    description: {
        textAlign: "center",
        marginBottom: theme.spacing(4),
        fontFamily: BODY_FONT,
    },
}))

export const query = graphql`
    query AboutPage {
        sanitySiteSettings {
            _rawAboutPageDescription
            _rawAboutPageHeader
        }
        allSanityBio(filter: { isGuest: { eq: false } }) {
            nodes {
                ...Bio
            }
        }
    }
`

export default function AboutPage({
    data,
}: PageProps<GatsbyTypes.AboutPageQuery>) {
    const classes = useStyles()
    const { sanitySiteSettings, allSanityBio } = data
    const [isVisible, setIsVisible] = useState(false)
    const bios = allSanityBio.nodes
    const trails = useTrail(bios.length, {
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
    })
    console.log(sanitySiteSettings?._rawAboutPageHeader)
    return (
        <>
            <SEO title="About" />
            <Container maxWidth="lg">
                <AnimateOnVisible once>
                    {(springStyle) => (
                        <animated.span
                            className={classes.title}
                            style={springStyle}
                        >
                            <SanityContent
                                blocks={sanitySiteSettings?._rawAboutPageHeader}
                            />
                        </animated.span>
                    )}
                </AnimateOnVisible>

                <span className={classes.description}>
                    <SanityContent
                        blocks={sanitySiteSettings?._rawAboutPageDescription}
                    />
                </span>

                <VisibilitySensor
                    onChange={(isVisible) => setIsVisible(isVisible)}
                    active={!isVisible}
                    partialVisibility
                >
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {bios.map((bio, index) => (
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
