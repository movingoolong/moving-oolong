import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Button,
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { useSpring, animated as a, config } from "react-spring"

// Components
import BackgroundImage from "gatsby-background-image"
import CustomLink from "components/General/CustomLink"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const AnimatedGrid = a(Grid)

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "60vh",
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            "&::before,&::after": {
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            },
        },
        filter: {
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.3)",
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
    })

type Props = WithStyles<typeof styles>

function AboutSection(props: Props) {
    const { classes } = props
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
                        <h2 className={classes.description}>
                            {data.markdownRemark?.frontmatter?.front_page}
                        </h2>
                    </Container>
                </AnimatedGrid>

                <AnimatedGrid item style={springRight}>
                    <CustomLink to="/about">
                        <Button
                            className={classes.button}
                            size="large"
                            variant="contained"
                        >
                            About Us
                        </Button>
                    </CustomLink>
                </AnimatedGrid>
            </Grid>
        </BackgroundImage>
    )
}

export default withStyles(styles)(AboutSection)
