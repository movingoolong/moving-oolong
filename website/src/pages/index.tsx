import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Button, Grid, makeStyles } from "@material-ui/core"
import { useSpring, animated, config } from "react-spring"

// Components
import RecentEpisodes from "@components/Episode/RecentEpisodes"
import AboutSection from "@components/About/AboutSection"
import ContactUsSection from "@components/About/ContactUsSection"
import SEO from "@components/General/SEO"
import CustomLink from "@components/General/CustomLink"
import { GatsbyImageIfExists } from "@components/Image"

// Hooks
import useBoop from "@hooks/useBoop"

const AnimatedGrid = animated(Grid)
const AnimatedButton = animated(Button)

const HEIGHT = "70vh"

const useStyles = makeStyles((theme) => ({
    about: {
        width: "100%",
        height: HEIGHT,
    },
    aboutImageWrapper: {
        width: "100%",
        height: HEIGHT,
        zIndex: -10,
        position: "fixed",
    },
    aboutImage: {
        backgroundAttachment: "fixed",
        zIndex: -10,
    },
    aboutTextContainer: {
        zIndex: 100,
        position: "absolute",
        top: 0,
        width: "100%",
        height: HEIGHT,
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
            <div className={classes.about}>
                <GatsbyImageIfExists
                    imageAsset={data?.sanitySiteSettings?.frontPageImage}
                    className={classes.aboutImageWrapper}
                    imgClassName={classes.aboutImage}
                    loading="eager"
                    objectPosition="center 50%"
                    objectFit="cover"
                    quality={100}
                    transformOptions={{
                        duotone: {
                            highlight: "#000000",
                            opacity: 0.4
                        }
                    }}
                />
                <Grid
                    container
                    className={classes.aboutTextContainer}
                    alignItems="center"
                    justify="center"
                    direction="column"
                >
                    <AnimatedGrid item style={springLeft}>
                        <Container maxWidth="md">Text</Container>
                    </AnimatedGrid>

                    <AnimatedGrid item style={springRight}>
                        <CustomLink to="/about">
                            <AnimatedButton
                                className={classes.aboutButton}
                                size="large"
                                variant="contained"
                                style={buttonBoopStyle}
                                onMouseEnter={trigger}
                            >
                                About Us
                            </AnimatedButton>
                        </CustomLink>
                    </AnimatedGrid>
                </Grid>
            </div>
            <div className={classes.content}>
                <RecentEpisodes />
                <Container maxWidth="xl">
                    <Grid
                        className={classes.contact}
                        container
                        alignItems="stretch"
                        justify="center"
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
