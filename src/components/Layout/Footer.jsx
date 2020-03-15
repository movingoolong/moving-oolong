import React from "react";
import { AppBar, withStyles, Toolbar } from "@material-ui/core";
import config from "data/SiteConfig";

// Components

const styles = theme => ({
    root: {
        top: 'auto',
        bottom: 0,
        margin: theme.spacing(2),
        padding: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    copyright: {
        color: theme.palette.primary.main,
    },
});

function Footer(props) {
    const { classes } = props;
    return (
        <Toolbar className={classes.root} color="transparent" position="fixed">
            <div className={classes.grow} />
            <h4 className={classes.copyright}>{config.copyright}</h4>
        </Toolbar>
    );
}

export default withStyles(styles)(Footer)