import React from "react"
import ClientOnly from "components/General/ClientOnly"

type Props = {
    height: number
}

function TwitterFeed(props: Props) {
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
