import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby"

// Components
import EpisodePageHeader from "components/EpisodePage/EpisodePageHeader";
import AllPosts from "components/Posts/AllPosts";

// Images


const styles = theme => ({
    root: {

    },
});

function EpisodePage(props) {
    const { classes } = props;

    return (
        <>
            <EpisodePageHeader />

            <AllPosts showDescription={true}/>
        </>
    );
}

export default withStyles(styles)(EpisodePage)