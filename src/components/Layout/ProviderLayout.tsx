import React from "react"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import Helmet from "react-helmet"

import theme from "../../theme"

type Props = {
    children: React.ReactNode | React.ReactNodeArray
}

export default function ProviderLayout(props: Props) {
    const { children } = props
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            {children}
        </ThemeProvider>
    )
}
