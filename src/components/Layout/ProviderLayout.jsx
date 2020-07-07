import React from "react"
import { ThemeProvider } from "@material-ui/core"

import theme from "../../theme"

function ProviderLayout({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ProviderLayout
