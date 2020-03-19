import React from "react";
import { Container, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components

const styles = theme => ({
    description: {
        fontSize: "22px",
        color: theme.palette.primary.dark,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px",
        },
    },
});

function SiteDescription(props) {
    const { classes } = props;
    return (
        <Container>
            <h5 className={classes.description}>
            {config.siteDescriptionLong} 
            </h5>
        </Container>
    );
}

export default withStyles(styles)(SiteDescription)