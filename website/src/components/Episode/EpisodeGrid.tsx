import React from "react"
import { Flipper, Flipped } from "react-flip-toolkit"

// Components
import { ContentGrid, PropsForGrid } from "@components/Layout"
import EpisodePreview from "./EpisodePreview"

type Props = PropsForGrid & {
    episodes: GatsbyTypes.EpisodeFragment[]
    showDescription?: boolean
}

function EpisodeGrid(props: Props) {
    const { episodes, showDescription = true, ...rest } = props
    const flipKey = episodes.map((episode) => episode._id).join()
    const content = episodes.map((episode) => ({
        node: (
            <Flipped flipId={episode._id}>
                <EpisodePreview
                    episode={episode}
                    showDescription={showDescription}
                />
            </Flipped>
        ),
        key: episode._id as string,
    }))

    return (
        <Flipper flipKey={flipKey}>
            <ContentGrid content={content} {...rest} />
        </Flipper>
    )
}

export default EpisodeGrid
