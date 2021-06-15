import React from "react"
import { animated } from "react-spring"
import { IconButton, IconButtonProps } from "@material-ui/core"

import useBoop, { BoopProps } from "hooks/useBoop"

const AnimatedIconButton = animated(IconButton)

type Props = IconButtonProps & {
    boopProps: BoopProps
}

export default function IconBoopButton({ boopProps, ...rest }: Props) {
    const [boopStyles, trigger] = useBoop(boopProps)

    return (
        <span onMouseEnter={trigger}>
            <AnimatedIconButton style={boopStyles} {...rest} />
        </span>
    )
}
