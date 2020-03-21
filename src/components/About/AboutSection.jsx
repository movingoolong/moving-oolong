import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Button, Container, Grid, withStyles } from "@material-ui/core";

import config from "data/SiteConfig";

// Components
import BackgroundImage from 'gatsby-background-image'


const styles = theme => ({
    root: {
        position: "relative",
        padding: theme.spacing(4),
        width: "100%",
        height: "1000px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 50%",
        backgroundSize: "cover",
        opacity: 0.99,

        [theme.breakpoints.down('sm')]: {
            height: "100%",
            backgroundAttachment: "scroll",
            backgroundPosition: "center 80%",
        },
    },
    container: {
        height: "100%",
    },
    title: {
        color: "#ffffff",
        textTransform: 'capitalize',
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        margin: theme.spacing(3),
        opacity: 0.9,
    },
    description: {
        textAlign: "center",
        color: "#ffffff",
        //textShadow: "-1px -1px 0 #000,  1px -1px 0 #000", //, -1px 1px 0 #000, 1px 1px 0 #000",
        margin: theme.spacing(3),

        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
        },
    }
});

function AboutSection(props) {
    const { classes } = props;
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "about.jpg"}) {
          childImageSharp {
            fluid(jpegQuality: 100) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);
    return (
        <BackgroundImage className={classes.root} fluid={data.file.childImageSharp.fluid}>
            <Container className={classes.container} maxWidth="sm">
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <h3 className={classes.description}>{config.siteDescriptionShort}</h3>
                    </Grid>

                    <Grid item>
                        <Link className={classes.link} to="/about">
                            <Button className={classes.button} size="large" variant="contained">
                                {/* <h1 className={classes.title}>About Us</h1> */}
                                About Us
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </BackgroundImage>
    );
}

export default withStyles(styles)(AboutSection)