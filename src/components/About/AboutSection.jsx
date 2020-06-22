import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Button, Container, Grid, withStyles } from "@material-ui/core"
import config from "data/SiteConfig"

// Components
import BackgroundImage from "gatsby-background-image"

const styles = (theme) => ({
    root: {
        position: "relative",
        padding: theme.spacing(4),
        width: "100%",
        height: "850px",
        opacity: 0.99,
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundSize: "cover",

        [theme.breakpoints.down("sm")]: {
            height: "600px",
        },
    },
    container: {
        height: "100%",
    },
    centerVert: {
        position: "relative",
        top: "30%",
        [theme.breakpoints.down("xs")]: {
            top: "20%",
        },
    },
    link: {
        textDecoration: "none",
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

function AboutSection(props) {
    const { classes } = props
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "about.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 4096, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <BackgroundImage
            className={classes.root}
            fluid={data.file.childImageSharp.fluid}
        >
            <Container className={classes.container} maxWidth="md">
                <Grid
                    className={classes.centerVert}
                    container
                    alignItems="center"
                    justify="center"
                    alignContent="center"
                    direction="column"
                >
                    <Grid item>
                        <h2 className={classes.description}>
                            {config.siteDescriptionShort}
                        </h2>
                    </Grid>

                    <Grid item>
                        <Link className={classes.link} to="/about">
                            <Button
                                className={classes.button}
                                size="large"
                                variant="contained"
                            >
                                About Us
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </BackgroundImage>
    )
}

export default withStyles(styles)(AboutSection)
