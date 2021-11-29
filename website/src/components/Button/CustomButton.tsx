import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { Link } from "gatsby"

type Props = ButtonProps & {
    to?: string
}

const CustomButton = React.forwardRef<HTMLElement, Props>(
    ({ to, ...rest }, ref) => (
        <Button
            component={to ? Link : "button"}
            to={to}
            // @ts-ignore Ref type weirdness
            ref={ref}
            {...rest}
        />
    )
)

export default CustomButton
