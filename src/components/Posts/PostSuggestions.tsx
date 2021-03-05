import React from "react"
import { Toolbar, makeStyles } from "@material-ui/core"

// Components
import CustomLink from "components/General/CustomLink"
import Text from "components/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    left: {
        textAlign: "left",
    },
    right: {
        textAlign: "right",
    },
    postTitle: {
        color: theme.palette.primary.main,
    },
    helpText: {
        color: theme.palette.text.primary,
    },
}))

type Props = {
    prevSlug: string
    prevTitle: string
    nextSlug: string
    nextTitle: string
}

function PostSuggestions(props: Props) {
    const { prevSlug, prevTitle, nextSlug, nextTitle } = props
    const classes = useStyles()
    let previous = <></>
    let next = <></>

    if (prevSlug !== "" && prevTitle !== "") {
        previous = (
            <CustomLink to={prevSlug}>
                <div className={classes.left}>
                    <Text variant="h6" className={classes.helpText}>
                        <b>Previous</b>
                    </Text>
                    <Text variant="subtitle1" className={classes.postTitle}>
                        {prevTitle}
                    </Text>
                </div>
            </CustomLink>
        )
    }

    if (nextSlug !== "" && nextTitle !== "") {
        next = (
            <CustomLink to={nextSlug}>
                <div className={classes.right}>
                    <Text variant="h6" className={classes.helpText}>
                        <b>Next</b>
                    </Text>
                    <Text variant="subtitle1" className={classes.postTitle}>
                        {nextTitle}
                    </Text>
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

export default PostSuggestions
