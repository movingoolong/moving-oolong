import React from "react"
import { Link } from "gatsby"
import { createStyles, Theme, withStyles, WithStyles, } from "@material-ui/core"

// Components

const styles = (theme: Theme) => createStyles({
    link: {
        textDecoration: "none",
        color: theme.palette.secondary.main,
    },
})

type Props = WithStyles<typeof styles> & {
    tag: string,
}

function TagLink(props: Props) {
    const { classes, tag } = props

    return (
        <Link className={classes.link} to={`/episodes/?tags=${tag}`} key={tag}>
            {`#${tag} `}
        </Link>
    )
}

export default withStyles(styles)(TagLink)
