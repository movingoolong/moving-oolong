import React from "react";
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import TwitterFeed from "components/Feeds/TwitterFeed";

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
                    <h1 className={classes.title}>Follow us on Twitter!</h1>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <TwitterFeed height={600} />
                </Grid>
            </Grid>

        </>
    );
}

export default withStyles(styles)(FeedSection)
