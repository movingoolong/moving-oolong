import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        verticalAlign: "middle",
        display: "inline-block",
    },
})

function Logo() {
    const classes = useStyles()
    return (
        <StaticImage
            className={classes.root}
            src="../../assets/img/logo.png"
            alt="Moving Oolong logo"
            layout="fixed"
            width={75}
            height={75}
            placeholder="blurred"
            loading="eager"
        />
    )
}

export default Logo
