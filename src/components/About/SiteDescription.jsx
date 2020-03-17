import React from "react";
import { Container, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components

const styles = theme => ({
    description: {
        fontSize: "24px",
        color: theme.palette.primary.dark,
        textAlign: "center",
    },
});

function SiteDescription(props) {
    const { classes } = props;
    return (
        <Container>
            <h5 className={classes.description}>
            {config.siteDescription} All 3 of us are Asian American undergrad students at the same large, public university, but our backgrounds are very different. 
            </h5>
        </Container>
    );
}

export default withStyles(styles)(SiteDescription)