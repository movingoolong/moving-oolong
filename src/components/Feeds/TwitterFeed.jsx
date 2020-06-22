import React from "react"

function TwitterFeed(props) {
    const { height } = props
    return (
        <a
            className="twitter-timeline"
            data-theme="light"
            data-height={height}
            href="https://twitter.com/movingoolongpod?ref_src=twsrc%5Etfw"
        >
            Tweets by movingoolongpod
        </a>
    )
}

export default TwitterFeed
