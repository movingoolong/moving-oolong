import React from "react";
import { withStyles } from "@material-ui/core";

// Components
import AllPosts from "components/Posts/AllPosts";
const styles = theme => ({
    root: {
        
    },
    title: {
        textAlign: "left",
        color: theme.palette.primary.main,
        margin: theme.spacing(2),
    }
});

function FeaturedPosts(props) {
    const { classes } = props;
    return (
        <>
            <h1 className={classes.title}>Featured Episodes</h1>
            <AllPosts amount={3}/>
        </>
    );
}

export default withStyles(styles)(FeaturedPosts)