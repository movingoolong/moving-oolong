import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useSpring, animated as a, config } from "react-spring"

// Components
import BackgroundImage from "gatsby-background-image"
import CustomLink from "components/General/CustomLink"
import Text from "components/Typography"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"
import useBoop from "hooks/useBoop"

const AnimatedGrid = a(Grid)
const AnimatedButton = a(Button)

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "70vh",
        position: "relative",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 90%",
        backgroundSize: "cover",
    },
    filter: {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: -1,
    },
    container: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    button: {
        margin: theme.spacing(3),
        opacity: 0.9,
    },
    description: {
        textAlign: "center",
        color: "#ffffff",
        margin: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(1),
        },
    },
}))

function AboutSection() {
    const classes = useStyles()
    const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
        query AboutSection {
            markdownRemark(fileAbsolutePath: { regex: "/site-descriptions/" }) {
                frontmatter {
                    front_page
                }
            }

            file(relativePath: { eq: "about3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 4096, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    `)

    const prefersReducedMotion = usePrefersReducedMotion()
    const springLeft = useSpring({
        from: { opacity: 0, transform: "translateX(-10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        immediate: prefersReducedMotion,
        config: config.molasses,
    })
    const springRight = useSpring({
        from: { opacity: 0, transform: "translateX(10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        immediate: prefersReducedMotion,
        config: config.molasses,
    })

    const [buttonBoopStyle, trigger] = useBoop({ scale: 1.05 })

    return (
        <BackgroundImage
            className={classes.root}
            fluid={data.file?.childImageSharp?.fluid}
            loading="eager"
        >
            <div className={classes.filter}>{""}</div>
            <Grid
                container
                className={classes.container}
                alignItems="center"
                justify="center"
                direction="column"
            >
                <AnimatedGrid item style={springLeft}>
                    <Container maxWidth="md">
                        <Text
                            variant="h5"
                            className={classes.description}
                            style={springLeft}
                        >
                            {data.markdownRemark?.frontmatter?.front_page}
                        </Text>
                    </Container>
                </AnimatedGrid>

                <AnimatedGrid item style={springRight}>
                    <CustomLink to="/about">
                        <AnimatedButton
                            className={classes.button}
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
        </BackgroundImage>
    )
}

export default AboutSection
