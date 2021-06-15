import React from "react"
import { IconButton, Tooltip, IconButtonProps } from "@material-ui/core"

type Props = {
    title: string
    href: string
    children: React.ReactNode
    color?: IconButtonProps["color"]
}

const TooltipIcon = ({ title, href, children, color }: Props) => (
    <Tooltip title={title} interactive placement="top">
        <IconButton href={href} color={color}>
            {children}
        </IconButton>
    </Tooltip>
)

export default TooltipIcon
