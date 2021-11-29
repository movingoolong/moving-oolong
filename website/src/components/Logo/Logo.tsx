import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { styled } from "@mui/material"

const StyledImage = styled(GatsbyImage)({
    verticalAlign: "middle",
    display: "inline-block",
})

export default function Logo() {
    const data = useStaticQuery<GatsbyTypes.LogoQuery>(graphql`
        query Logo {
            file(relativePath: { in: "logo.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: BLURRED
                        layout: FIXED
                        width: 75
                        height: 75
                    )
                }
            }
        }
    `)
    return (
        <StyledImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Moving Oolong logo"
            loading="eager"
        />
    )
}
