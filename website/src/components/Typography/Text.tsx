import React from "react"
import { Typography, TypographyProps } from "@mui/material"
import { animated } from "react-spring"

export interface TextColorOptions {
    color?: TypographyProps["color"] | "white" | "success"
    className?: string
}

type Props = Omit<TypographyProps, "color"> & TextColorOptions

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function Text(props: Props, ref: React.Ref<HTMLElement>) {
    const { className, color, ...rest } = props

    return (
        <Typography className={className} color={color} ref={ref} {...rest} />
    )
}

export default React.forwardRef(Text)
export const AnimatedText = animated(React.forwardRef(Text))
