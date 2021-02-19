import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles({
    root: {
        textDecoration: "none",
    },
})

type Props = {
    to: string
    children: React.ReactNode | React.ReactNodeArray
    className?: string
}

function CustomLink({ to, children, className = "" }: Props) {
    const classes = useStyles()
    return (
        <Link className={clsx(classes.root, className)} to={to}>
            {children}
        </Link>
    )
}

export default CustomLink
