import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"

//Components
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function Layout(props) {
    const { children, location } = props

    return (
        <>
            <CssBaseline />
            <NavBar location={location} />
            {children}
            <Footer />
        </>
    )
}
