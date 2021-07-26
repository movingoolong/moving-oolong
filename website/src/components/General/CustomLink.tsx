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
    to: string | undefined
    children: React.ReactNode | React.ReactNodeArray
    className?: string
}

function CustomLink(
    { to, children, className = "" }: Props,
    ref: React.Ref<HTMLAnchorElement>
) {
    const classes = useStyles()
    return (
        // @ts-ignore Ref has a weird type for Gatsby
        <Link className={clsx(classes.root, className)} to={to ? to : "/"} ref={ref}>
            {children}
        </Link>
    )
}

export default React.forwardRef(CustomLink)
