import React from "react"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

export type SanityImageWithAltText = GatsbyTypes.Maybe<{
    readonly asset: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.SanityImageAsset, "gatsbyImageData" | "altText">
    >
}>

// Defined with GatsbyTypes.Maybe so that we know image and alt are required fields
// but sometimes the values passed in are undefined
type Props = Omit<GatsbyImageProps, "image" | "alt"> & {
    imageAsset: SanityImageWithAltText
}

const GatsbyImageIfExists = ({ imageAsset, ...rest }: Props) => {
    if (!imageAsset || !imageAsset?.asset?.gatsbyImageData) {
        return <></>
    }

    const { gatsbyImageData, altText } = imageAsset?.asset
    return (
        <GatsbyImage
            image={gatsbyImageData}
            alt={altText ? altText : ""}
            {...rest}
        />
    )
}

export default GatsbyImageIfExists
