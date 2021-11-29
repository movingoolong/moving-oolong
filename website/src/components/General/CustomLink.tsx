import React from "react"
import { Link } from "gatsby"
import { styled } from "@mui/material"

type Props = {
    to: string
    children: React.ReactNode | React.ReactNodeArray
    className?: string
}

const StyledLink = styled(Link)({
    textDecoration: "none",
})

function CustomLink(
    { to, children, className = "" }: Props,
    ref: React.Ref<HTMLAnchorElement>
) {
    return (
        <StyledLink
            className={className}
            to={to.charAt(0) != "/" ? `/${to}` : to}
            // @ts-ignore Ref has a weird type for Gatsby
            ref={ref}
        >
            {children}
        </StyledLink>
    )
}

export default React.forwardRef(CustomLink)
