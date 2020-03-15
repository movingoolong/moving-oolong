import React from "react";
import { Button, Card, CardContent, CardHeader, CardActions, withStyles } from "@material-ui/core";

// Components
import BioImage from "./BioImage";
const styles = {
    root: {
        height: "100%",
    },
    content: {
        width: "100%",

    }
};

function Bio(props) {
    const { classes, name, propic, description, allImages } = props;
    return (
        <Card className={classes.root}>
            <BioImage allImages={allImages} imgSrc={propic} />
            <CardHeader title={name} />
            <CardContent>
                <div
                    className={classes.content}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Bio)