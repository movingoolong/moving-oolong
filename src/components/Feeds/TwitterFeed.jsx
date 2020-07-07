import React from "react"
import ClientOnly from "components/General/ClientOnly"

function TwitterFeed(props) {
    const { height } = props
    return (
        <ClientOnly>
            <a
                className="twitter-timeline"
                data-theme="light"
                data-height={height}
                href="https://twitter.com/movingoolongpod?ref_src=twsrc%5Etfw"
            >
                Tweets by movingoolongpod
            </a>
        </ClientOnly>
    )
}

export default TwitterFeed
