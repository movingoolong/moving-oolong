import React from "react"

type Props = {
    src?: string
}
function Spotify({ src = "https://open.spotify.com/episode/1R5u8jFJNqQdeWOjHBvvnc" }: Props) {
    const episodeId = src.substring(src.lastIndexOf('/'), src.lastIndexOf("?"))
    return (
        <iframe
            src={`https://open.spotify.com/embed/episode${episodeId}`}
            width="100%"
            height="232"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
        />
    )
}

export default Spotify