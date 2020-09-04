import React from "react"
import { EpisodeArrayType } from "hooks/useEpisodes"

// Components
import ContentGrid, { PropsForGrid } from "components/General/ContentGrid"
import EpisodePreview from "./EpisodePreview"

type Props = PropsForGrid & {
    episodes: EpisodeArrayType
    showDescription?: boolean
}

function EpisodeGrid(props: Props) {
    const { episodes, showDescription = true, ...rest } = props
    const content = episodes.map((episode) => ({
        node: (
            <EpisodePreview
                episode={episode}
                showDescription={showDescription}
            />
        ),
        key: episode.node.id,
    }))

    return <ContentGrid content={content} {...rest} />
}

export default EpisodeGrid
