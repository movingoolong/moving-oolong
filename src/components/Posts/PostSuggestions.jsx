import React from "react";
import { Link } from "gatsby";
import { Toolbar, withStyles } from "@material-ui/core";

// Components

const styles = theme => ({
    root: {

    },
    grow: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
    },
    left: {
        textAlign: "left",
    },
    right: {
        textAlign: "right",
    },
    postTitle: {
        color: theme.palette.primary.dark,
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px",
        },
    },
    helpText: {
        color: theme.palette.primary.light,
    },
});

function PostSuggestions(props) {
    const { classes, prevSlug, prevTitle, nextSlug, nextTitle } = props;
    let previous = <></>;
    let next = <></>;

    if (prevSlug !== "" && prevTitle !== "") {
        previous = (
            <Link className={classes.link} to={prevSlug}>
                <div className={classes.left}>
                    <h4 className={classes.helpText}><b>Previous</b></h4>
                    <h3 className={classes.postTitle}>{prevTitle}</h3>
                </div>
            </Link>
        );
    }

    if (nextSlug !== "" && nextTitle !== "") {
        next = (
            <Link className={classes.link} to={nextSlug}>
                <div className={classes.right}>
                    <h4 className={classes.helpText}><b>Next</b></h4>
                    <h3 className={classes.postTitle}>{nextTitle}</h3>
                </div>
            </Link>
        );
    }

    return (
        <Toolbar className={classes.root}>
            {previous}
            <div className={classes.grow} />
            {next}
        </Toolbar>
    );
}

export default withStyles(styles)(PostSuggestions)