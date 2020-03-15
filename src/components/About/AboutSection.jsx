import React from "react";
import { Container, Grid, withStyles } from "@material-ui/core";

import config from "data/SiteConfig";

// Components
const styles = theme => ({
    root: {
        background: theme.palette.primary.dark,
        padding: theme.spacing(2),
    },
    title: {
        color: "#ffffff",
    },
    description: {
        textAlign: "left",
        color: "#ffffff",
        margin: theme.spacing(3),
        width: "25%",
    }
});

function AboutSection(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>about us</h1>
            <h3 className={classes.description}>{config.siteDescription}</h3>
        </div>
    );
}

export default withStyles(styles)(AboutSection)