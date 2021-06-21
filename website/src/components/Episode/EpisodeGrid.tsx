import React from "react"
import { EpisodeArrayType } from "@hooks/useEpisodes"
import { Flipper, Flipped } from "react-flip-toolkit"

// Components
import ContentGrid, { PropsForGrid } from "@components/General/ContentGrid"
import EpisodePreview from "./EpisodePreview"

type Props = PropsForGrid & {
    episodes: EpisodeArrayType
    showDescription?: boolean
}

function EpisodeGrid(props: Props) {
    const { episodes, showDescription = true, ...rest } = props
    const flipKey = episodes.map((episode) => episode.node.id).join()
    const content = episodes.map((episode) => ({
        node: (
            <Flipped flipId={episode.node.id}>
                <EpisodePreview
                    episode={episode}
                    showDescription={showDescription}
                />
            </Flipped>
        ),
        key: episode.node.id,
    }))

    return (
        <Flipper flipKey={flipKey}>
            <ContentGrid content={content} {...rest} />
        </Flipper>
    )
}

export default EpisodeGrid
