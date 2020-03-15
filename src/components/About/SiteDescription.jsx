import React from "react";
import { Container, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components

const styles = theme => ({
    description: {
        fontSize: "24px",
        color: theme.palette.primary.dark,
    },
});

function SiteDescription(props) {
    const { classes } = props;
    return (
        <Container>
            <h5 className={classes.description}>{config.siteDescription}</h5>
        </Container>
    );
}

export default withStyles(styles)(SiteDescription)