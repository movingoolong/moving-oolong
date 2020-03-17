import React from "react";
import { Card, CardContent, CardActions, withStyles } from "@material-ui/core";
import SocialIcons from "./SocialIcons";

// Components
import BioImage from "./BioImage";
import theme from "theme";
const styles = theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    title: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.palette.primary.dark,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    socials: {
        flexGrow: 1,
        marginLeft: "auto",
        marginRight: "auto",
    },
});

function Bio(props) {
    const { classes, name, propic, description, instagram, twitter, allImages } = props;
    console.log(props);
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <BioImage allImages={allImages} imgSrc={propic} />
                <CardContent>
                    <h2 className={classes.title}>{name}</h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </CardContent>
            </div>
            <CardActions disableSpacing className={classes.socials}>
                <SocialIcons instagram={instagram} twitter={twitter}/>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(Bio)