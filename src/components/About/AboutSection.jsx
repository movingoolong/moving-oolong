import React from "react";
import { Link } from "gatsby";
import { Button, Container, Grid, withStyles } from "@material-ui/core";

import config from "data/SiteConfig";

// Components
const styles = theme => ({
    root: {
        background: theme.palette.primary.dark,
        padding: theme.spacing(2),
    },
    title: {
        color: "#ffffff",
        textTransform: 'capitalize',
    },
    link: {
        textDecoration: 'none',
    },
    description: {
        textAlign: "left",
        color: "#ffffff",
        margin: theme.spacing(3),
        width: "25%",

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: theme.spacing(1),
        },
    }
});

function AboutSection(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Link className={classes.link} to="/about">
                <Button className={classes.button} size="small">
                    <h1 className={classes.title}>About Us</h1>
                </Button>
            </Link>

            <h3 className={classes.description}>{config.siteDescription}</h3>
        </div>
    );
}

export default withStyles(styles)(AboutSection)