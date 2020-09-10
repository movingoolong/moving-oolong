import React from "react"
import { Link } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textDecoration: "none",
        },
    })

type Props = WithStyles<typeof styles> & {
    to: string
    children: React.ReactNode | React.ReactNodeArray
    className?: string
}

function CustomLink(props: Props) {
    const { classes, to, children, className = ""} = props
    return (
        <Link className={clsx(classes.root, className)} to={to}>
            {children}
        </Link>
    )
}

export default withStyles(styles)(CustomLink)
