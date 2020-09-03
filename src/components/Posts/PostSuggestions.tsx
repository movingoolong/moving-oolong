import React from "react"
import {
    Toolbar,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import CustomLink from "components/General/CustomLink"

const styles = (theme: Theme) =>
    createStyles({
        root: {},
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
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
            },
        },
        helpText: {
            color: theme.palette.primary.light,
        },
    })

type Props = WithStyles<typeof styles> & {
    prevSlug: string
    prevTitle: string
    nextSlug: string
    nextTitle: string
}

function PostSuggestions(props: Props) {
    const { classes, prevSlug, prevTitle, nextSlug, nextTitle } = props
    let previous = <></>
    let next = <></>

    if (prevSlug !== "" && prevTitle !== "") {
        previous = (
            <CustomLink className={classes.link} to={prevSlug}>
                <div className={classes.left}>
                    <h4 className={classes.helpText}>
                        <b>Previous</b>
                    </h4>
                    <h3 className={classes.postTitle}>{prevTitle}</h3>
                </div>
            </CustomLink>
        )
    }

    if (nextSlug !== "" && nextTitle !== "") {
        next = (
            <CustomLink className={classes.link} to={nextSlug}>
                <div className={classes.right}>
                    <h4 className={classes.helpText}>
                        <b>Next</b>
                    </h4>
                    <h3 className={classes.postTitle}>{nextTitle}</h3>
                </div>
            </CustomLink>
        )
    }

    return (
        <Toolbar className={classes.root}>
            {previous}
            <div className={classes.grow} />
            {next}
        </Toolbar>
    )
}

export default withStyles(styles)(PostSuggestions)
