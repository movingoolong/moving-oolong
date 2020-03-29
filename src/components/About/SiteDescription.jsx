import React from "react";
import { Container, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components

const styles = theme => ({
    title: {
        fontSize: "22px",
        textAlign: "center",
        color: theme.palette.primary.dark,
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
        },
    },
    description: {
        fontSize: "18px",
        textAlign: "center",
        color: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: "16px",
        },
    },
});

function SiteDescription(props) {
    const { classes } = props;
    return (
        <Container>
            <h4 className={classes.title}>Raw, unfiltered conversations between 3 best friends </h4>
            <h5 className={classes.description}>
                We’re Asian American young women who started this podcast to share our stories and growing pains of preparing to graduate college.
                Our intersecting identities as Asian American women play a large role in shaping our experiences as young adults and we hope this podcast acts as a time-capsule to remember and reflect on this time of transition in our lives.
                We invite you to listen & enjoy stories of us moving along!
            </h5>
        </Container>
    );
}

export default withStyles(styles)(SiteDescription)