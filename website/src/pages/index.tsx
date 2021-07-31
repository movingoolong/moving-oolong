import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Button, Grid, makeStyles } from "@material-ui/core"
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
const AnimatedButton = animated(Button)

const HEIGHT = "70vh"

const useStyles = makeStyles((theme) => ({
    aboutImageWrapper: {
        width: "100%",
        height: HEIGHT,
        position: "fixed",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 60%",
        backgroundSize: "cover",
    },
    aboutTextContainer: {
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    aboutDescription: {
        textAlign: "center",
        color: "#ffffff",
        margin: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(1),
        },
    },
    aboutButton: {
        margin: theme.spacing(3),
        opacity: 0.9,
    },
    contact: {
        marginTop: theme.spacing(2),
    },
    content: {
        background: theme.palette.background.default,
    },
}))

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
    const classes = useStyles()

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
                className={classes.aboutImageWrapper}
                loading="eager"
            >
                <Grid
                    container
                    className={classes.aboutTextContainer}
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                >
                    <AnimatedGrid item style={springLeft}>
                        <Container
                            maxWidth="md"
                            className={classes.aboutDescription}
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
                                className={classes.aboutButton}
                                size="large"
                                variant="contained"
                            >
                                About Us
                            </CustomButton>
                        </span>
                    </AnimatedGrid>
                </Grid>
            </ImageSection>
            <div className={classes.content}>
                <RecentEpisodes episodes={data.allSanityEpisode.nodes} />
                <Container maxWidth="xl">
                    <Grid
                        className={classes.contact}
                        container
                        alignItems="stretch"
                        justifyContent="center"
                    >
                        <Grid item xs={12} sm={9}>
                            <ContactUsSection />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
