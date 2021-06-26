import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

// Defined with GatsbyTypes.Maybe so that we know image and alt are required fields
// but sometimes the values passed in are undefined
type Props = {
    imageAsset: GatsbyTypes.FluidImageFragment
}

const GatsbyImageIfExists = ({ imageAsset }: Props) => {
    if (!imageAsset || imageAsset?.asset?.gatsbyImageData) {
        return <></>
    }

    const { gatsbyImageData, alt } = imageAsset.asset

    return <GatsbyImage image={gatsbyImageData} alt={alt ? alt : ""} />
}

export default GatsbyImageIfExists
