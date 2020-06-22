import React from "react"
import Img from "gatsby-image"
import { withStyles } from "@material-ui/core"

// Components

const styles = (theme) => ({
    root: {
        height: "auto",
        width: "100%",
    },
})

function BioImage(props) {
    const { classes, allImages, imgSrc } = props

    const img = allImages.filter((imageFile) => {
        if (imageFile.node.childImageSharp === null) return false
        if (imageFile.node.absolutePath.indexOf(imgSrc) !== -1) return true
        else return false
    })

    if (img.length === 1) {
        return (
            <Img
                fluid={img[0].node.childImageSharp.fluid}
                className={classes.root}
            />
        )
    } else {
        return <></>
    }
}

export default withStyles(styles)(BioImage)
