import React from "react"
import { GatsbyImageProps } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { makeStyles } from "@material-ui/core"

import { SanityImageWithAltText } from "./GatsbyImageIfExists"

const useStyles = makeStyles((theme) => ({
    imageFilter: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        background: "rgba(0, 0, 0, 0.4)",
    },
    content: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
    },
}))

// Defined with GatsbyTypes.Maybe so that we know image and alt are required fields
// but sometimes the values passed in are undefined
type Props = Omit<GatsbyImageProps, "image" | "alt"> & {
    imageAsset: SanityImageWithAltText
}

const ImageSection = ({ imageAsset, children, ...rest }: Props) => {
    const classes = useStyles()
    if (!imageAsset || !imageAsset?.asset?.gatsbyImageData) {
        return <div className={classes.content}>{children}</div>
    }

    const { gatsbyImageData, altText } = imageAsset?.asset
    return (
        <BgImage image={gatsbyImageData} alt={altText} {...rest}>
            <div className={classes.imageFilter} />
            <div className={classes.content}>{children}</div>
        </BgImage>
    )
}

export default ImageSection
