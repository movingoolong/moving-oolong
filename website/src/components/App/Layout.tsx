import React from "react"
import { PageProps } from "gatsby"

//Components
import Header from "./Header"
import Footer from "./Footer"

type Props = PageProps & {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children, location } = props
    return (
        <>
            <Header location={location} />
            <main>{children}</main>
            <Footer />
        </>
    )
}
