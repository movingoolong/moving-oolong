import React from "react"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core"

// Components

const styles = (theme) => ({
    link: {
        textDecoration: "none",
        color: theme.palette.secondary.main,
    },
})

function TagLink(props) {
    const { classes, tag } = props

    return (
        <Link className={classes.link} to={`/episodes/?tags=${tag}`} key={tag}>
            {`#${tag} `}
        </Link>
    )
}

export default withStyles(styles)(TagLink)
