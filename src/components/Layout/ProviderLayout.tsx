import React from "react"
import { ThemeProvider, CssBaseline } from "@material-ui/core"

import theme from "../../theme"

type Props = {
    children: React.ReactNode | React.ReactNodeArray
}

export default function ProviderLayout(props: Props) {
    const { children } = props
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
