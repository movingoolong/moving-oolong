import React, { forwardRef } from "react";
import { Paper, MenuList, withStyles } from "@material-ui/core";

// Components
const styles = theme => ({
    root: {
        display: (props => props.show ? "grid" : "none"),
        maxHeight: "80vh",
        overflow: "scroll",
        zIndex: theme.zIndex.modal,
        webkitOverflowScrolling: "touch",
        position: "absolute",
        right: 0,
        top: "calc(100 % + 0.5em)",
        width: "80vw",
        maxWidth: "30em",
        boxShadow: "0 0 5px 0",
        padding: "0.7em 1em 0.4em",
        background: "white",
        borderRadius: theme.shape.borderRadius,
        "> * + *": {
            paddingTop: "1em!important",
            borderTop: `2px solid ${theme.palette.secondary.dark}`,
        },
        "li + li": {
            marginTop: "0.7em",
            paddingTop: "0.7em",
            borderTop: `1px solid ${theme.palette.secondary.main}`,
        },
        "*": {
            marginTop: 0,
            padding: 0,
        },
        "ul": {
            listStyle: "none",
        },
        "mark": {
            color: theme.palette.primary.dark,
            background: theme.palette.primary.main,
        },
        "header": {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.3em",
            "h3": {
                color: "white",
                background: theme.palette.secondary.main,
                padding: "0.1em 0.4em",
                borderRadius: theme.shape.borderRadius,
            }
        },
        "h3": {
            margin: "0 0 0.5em",
        },
        "h4": {
            marginbottom: "0.3em",
        },
    },
    paper: {
        width: "100%",
    },
    menu: {
        width: "100%",
    },
});

function SearchHitsWrapper(props, ref) {
    const { classes, children, open, ...rest } = props;
    return (
        <Paper className={classes.paper}>
            <MenuList
                className={classes.menu}
                autoFocusItem={open}
                {...rest}
            >
                {children}
            </MenuList>
        </Paper>

    );
}

export default withStyles(styles)(forwardRef(SearchHitsWrapper))