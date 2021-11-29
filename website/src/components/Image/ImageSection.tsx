import React from "react"
import { GatsbyImageProps } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { styled } from "@mui/material"

import { SanityImageWithAltText } from "./GatsbyImageIfExists"

const ImageFilter = styled("div")({
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    background: "rgba(0, 0, 0, 0.4)",
})

const Content = styled("div")(({theme})=>({
    width: "100%",
        height: "100%",
        padding: theme.spacing(2),
}))

// Defined with GatsbyTypes.Maybe so that we know image and alt are required fields
// but sometimes the values passed in are undefined
type Props = Omit<GatsbyImageProps, "image" | "alt"> & {
    imageAsset: SanityImageWithAltText
}

const ImageSection = ({ imageAsset, children, ...rest }: Props) => {
    if (!imageAsset || !imageAsset?.asset?.gatsbyImageData) {
        return <Content>{children}</Content>
    }

    const { gatsbyImageData, altText } = imageAsset?.asset
    return (
        <BgImage image={gatsbyImageData} alt={altText} {...rest}>
            <ImageFilter />
            <Content>{children}</Content>
        </BgImage>
    )
}

export default styled(ImageSection)()
