import React from "react";
import { Card, withStyles } from "@material-ui/core";

// Components

const styles = {
    root: {
        width: "100%",
    },
    media: {
        width: "100%",
        
    }
};

function Bio(props) {
    const { classes, name, propic, description } = props;
    return (
        <Card className={classes.root}>
        </Card>
    );
}

export default withStyles(styles)(Bio)