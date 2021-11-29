import React from "react"
import { graphql, PageProps } from "gatsby"
import { Box, Container, Button, Grid } from "@mui/material"
import { useSpring, animated, config } from "react-spring"

// Components
import RecentEpisodes from "@components/Episode/RecentEpisodes"
import ContactUsSection from "@components/About/ContactUsSection"
import SEO from "@components/General/SEO"
import { ImageSection } from "@components/Image"
import { CustomButton } from "@components/Button"

// Hooks
import useBoop from "@hooks/useBoop"
import SanityContent from "@components/SanityContent"

const AnimatedGrid = animated(Grid)

const HEIGHT = "70vh"

export const query = graphql`
    query IndexPage {
        sanitySiteSettings {
            _rawFrontPageDescription
            frontPageImage {
                asset {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        fit: CROP
                    )
                    altText
                }
            }
        }
        allSanityEpisode(sort: { fields: datetime, order: DESC }) {
            nodes {
                ...Episode
            }
        }
    }
`

export default function IndexPage({
    data,
}: PageProps<GatsbyTypes.IndexPageQuery>) {
    const [buttonBoopStyle, trigger] = useBoop({ scale: 1.05 })
    const springLeft = useSpring({
        from: { opacity: 0, transform: "translateX(-10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        config: config.molasses,
    })
    const springRight = useSpring({
        from: { opacity: 0, transform: "translateX(10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        config: config.molasses,
    })

    return (
        <>
            <SEO
                title={"Home"}
                meta={[
                    {
                        property: "og:image",
                        content: `logos/logo-512.png`,
                    },
                ]}
            />
            {/* About Section*/}
            <ImageSection
                imageAsset={data?.sanitySiteSettings?.frontPageImage}
                loading="eager"
                sx={{
                    width: "100%",
                    height: HEIGHT,
                    position: "fixed",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center 60%",
                    backgroundSize: "cover",
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    sx={{
                        width: "100%",
                        height: "100%",
                        margin: "auto",
                    }}
                >
                    <AnimatedGrid item style={springLeft}>
                        <Container
                            maxWidth="md"
                            sx={{
                                textAlign: "center",
                                color: "#ffffff",
                                margin: { xs: 1, md: 3 },
                            }}
                        >
                            <SanityContent
                                blocks={
                                    data.sanitySiteSettings
                                        ?._rawFrontPageDescription
                                }
                            />
                        </Container>
                    </AnimatedGrid>

                    <AnimatedGrid item style={springRight}>
                        <span style={buttonBoopStyle} onMouseEnter={trigger}>
                            <CustomButton
                                to="/about"
                                size="large"
                                variant="contained"
                                sx={{
                                    margin: 3, // theme.spacing(3),
                                    opacity: 0.9,
                                }}
                            >
                                About Us
                            </CustomButton>
                        </span>
                    </AnimatedGrid>
                </Grid>
            </ImageSection>
            <Box
                sx={{
                    background: "background.default",
                }}
            >
                <RecentEpisodes episodes={data.allSanityEpisode.nodes} />
                <Container maxWidth="xl">
                    <Grid
                        container
                        alignItems="stretch"
                        justifyContent="center"
                        sx={{ marginTop: 2 }}
                    >
                        <Grid item xs={12} sm={9}>
                            <ContactUsSection />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
