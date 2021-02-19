import React from "react"
import { Typography, TypographyProps, makeStyles } from "@material-ui/core"
import { animated } from "react-spring"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
    white: {
        color: "#ffffff",
    },
    success: {
        color: theme.palette.success.main,
    },
}))

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
    const { className = "", color = "initial", ...rest } = props
    const classes = useStyles()
    let textClassName = className

    let passedColor = color

    switch (color) {
        case "white":
            textClassName = clsx(textClassName, classes.white)
            passedColor = "initial"
            break
        case "success":
            textClassName = clsx(textClassName, classes.success)
            passedColor = "initial"
            break
        default:
            passedColor = color
    }

    return (
        <Typography
            className={textClassName}
            color={passedColor}
            ref={ref}
            {...rest}
        />
    )
}

export default React.forwardRef(Text)
export const AnimatedText = animated(React.forwardRef(Text))