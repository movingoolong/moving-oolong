import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { styled } from "@mui/material"

const StyledImage = styled(StaticImage)({
    verticalAlign: "middle",
    display: "inline-block",
})

export default function Logo() {
    return (
        <StyledImage
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
