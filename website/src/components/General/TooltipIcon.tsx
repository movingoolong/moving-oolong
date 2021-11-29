import React from "react"
import { IconButton, Tooltip, IconButtonProps } from "@mui/material"

type Props = {
    title: string
    href: string
    children: React.ReactNode
    color?: IconButtonProps["color"]
}

const TooltipIcon = ({ title, href, children, color }: Props) => (
    <Tooltip title={title} disableInteractive={false} placement="top">
        <IconButton href={href} color={color}>
            {children}
        </IconButton>
    </Tooltip>
)

export default TooltipIcon
