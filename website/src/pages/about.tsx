import React, { useState } from "react"
import { graphql, PageProps } from "gatsby"
import { Box, Container, Grid, styled } from "@mui/material"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated } from "react-spring"
import { BODY_FONT } from "../theme"

// Components
import Bio from "@components/About/Bio"
import SEO from "@components/General/SEO"
import { AnimateOnVisible } from "@components/Layout"
import SanityContent from "@components/SanityContent"

const AnimatedGrid = animated(Grid)
const AnimatedTitle = animated(
    styled("span")(({ theme }) => ({
        color: theme.palette.primary.main,
        textAlign: "center",
        margin: theme.spacing(4),
    }))
)

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
    const { sanitySiteSettings, allSanityBio } = data
    const [isVisible, setIsVisible] = useState(false)
    const bios = allSanityBio.nodes
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
                        <AnimatedTitle style={springStyle}>
                            <SanityContent
                                blocks={sanitySiteSettings?._rawAboutPageHeader}
                            />
                        </AnimatedTitle>
                    )}
                </AnimateOnVisible>

                <Box
                    sx={{
                        textAlign: "center",
                        marginBottom: 4, // theme.spacing(4),
                        fontFamily: BODY_FONT,
                    }}
                >
                    <SanityContent
                        blocks={sanitySiteSettings?._rawAboutPageDescription}
                    />
                </Box>

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
                                xs={12}
                                sm={4}
                                key={index}
                                style={trails[index]}
                                sx={{
                                    marginTop: 2,
                                }}
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
