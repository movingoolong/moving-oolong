import React from "react";
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import TwitterFeed from "components/Feeds/TwitterFeed";
//import SocialIcons from "components/About/SocialIcons";

const styles = theme => ({
    root: {

    },
    title: {
        textAlign: "center",
        color: theme.palette.primary.main,
    },
});

function FeedSection(props) {
    const { classes } = props;

    return (
        <>
            <Grid container alignItems="center" justify="center" alignContent="center">
                <Grid item xs={12}>
                    <TwitterFeed height={600} />
                </Grid>
            </Grid>
        </>
    );
}

export default withStyles(styles)(FeedSection)
