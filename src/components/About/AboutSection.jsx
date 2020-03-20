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
        height: "100%",
        backgroundAttachment: "scroll",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        opacity: 0.99,
    },
    title: {
        color: "#ffffff",
        textTransform: 'capitalize',
        // textShadow: "-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
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
        file(relativePath: {eq: "about2.jpg"}) {
          childImageSharp {
            fluid(jpegQuality: 100) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
    `);
    return (
        <BackgroundImage className={classes.root} fluid={data.file.childImageSharp.fluid} preserveStackingContext>
            <Container maxWidth="sm">
                <Grid container direction="column" alignItems="center" justify="center">
                    
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