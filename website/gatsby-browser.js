import React from "react"

import { Providers, Layout } from "@components/App"

export const wrapRootElement = ({ element, props }) => <Providers {...props}>{element}</Providers>
export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
    }
}
