import React from "react";
import { Link } from "gatsby";
import { Grid, Hidden, withStyles } from "@material-ui/core";

// Components
import AllPosts from "components/Posts/AllPosts";
import SwipeablePosts from 'components/Posts/SwipeablePosts';

const styles = theme => ({
    root: {

    },
    title: {
        textAlign: "left",
        color: theme.palette.primary.main,
        margin: theme.spacing(2),
        marginBottom: 0,
    },
    link: {
        textAlign: "right",
        color: theme.palette.primary.dark,
        fontSize: "16px",
        margin: theme.spacing(2),
    },
});

function RecentPosts(props) {
    const { classes } = props;
    return (
        <>
            <Grid container alignItems="flex-end" justify="space-between">
                <Grid item xs={12} sm={8}>
                    <h1 className={classes.title}>Recent Episodes</h1>
                </Grid>
                <Grid>
                    <Link className={classes.link} to="/episodes">
                        <i>See all episodes</i>
                    </Link>
                </Grid>


            </Grid>

            <Hidden xsDown>
                <SwipeablePosts />
            </Hidden>
            <Hidden mdUp>
                <AllPosts amount={3} showDescription={false} />
            </Hidden>
        </>
    );
}

export default withStyles(styles)(RecentPosts)