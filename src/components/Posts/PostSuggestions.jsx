import React from "react";
import { Link } from "gatsby";
import { Toolbar, withStyles } from "@material-ui/core";

// Components

const styles = theme => ({
    root: {

    },
    link: {
        textDecoration: "none",
    },
    postTitle: {

    },
    helpText: {

    },
});

function PostSuggestions(props) {
    const { classes, prevSlug, prevTitle, nextSlug, nextTitle } = props;
    let previous = <></>;
    let next = <></>;

    if (prevSlug !== "" && prevTitle !== "") {
        previous = (
            <Link className={classes.link} to={prevSlug}>
                <h5 className={classes.helpText}>Previous</h5>
                <h4 className={classes.postTitle}>{prevTitle}</h4>
            </Link>
        );
        console.log("created prev");
    }

    if (nextSlug !== "" && nextTitle !== "") {
        next = (
            <Link className={classes.link} to={nextSlug}>
                <h5 className={classes.helpText}>Next</h5>
                <h4 className={classes.postTitle}>{nextTitle}</h4>
            </Link>
        );
        console.log("created next");
    }

    return (
        <Toolbar>
            {previous}
            {next}
        </Toolbar>
    );
}

export default withStyles(styles)(PostSuggestions)