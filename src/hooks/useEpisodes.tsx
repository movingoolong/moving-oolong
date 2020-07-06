import { useStaticQuery, graphql } from "gatsby"
import { mapImgToNode } from "utils/hookUtils"

type EpisodeNode = GatsbyTypes.AllEpisodesQuery["allMarkdownRemark"]["edges"][0]

export type EpisodeArrayType = ReturnType<typeof useEpisodes>

export interface UseEpisodesOptions {
    amount?: number
    tags?: string[]
}

export default function useEpisodes(options: UseEpisodesOptions) {
    const { amount, tags } = options
    const data = useStaticQuery<GatsbyTypes.AllEpisodesQuery>(graphql`
        query AllEpisodes {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "episode" } } }
                sort: { order: DESC, fields: frontmatter___date }
            ) {
                edges {
                    node {
                        ...Episode
                    }
                }
            }
            allFile(filter: { absolutePath: { regex: "static/assets/" } }) {
                edges {
                    node {
                        ...FluidImage
                    }
                }
            }
        }
    `)

    if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
        throw new Error("Error in formation of episodes query")
    }

    let episodes = mapImgToNode<EpisodeNode>(
        data.allMarkdownRemark.edges,
        data.allFile.edges
    )

    if (tags && tags.length > 0) {
        episodes = episodes.filter((episode) =>
            episode.node.frontmatter?.tags?.some((postTags) => {
                if (!postTags) return false

                let i = 0
                while (i < tags.length) {
                    if (postTags.includes(tags[i])) return true
                    i++
                }
                return false
            })
        )
    }

    return amount && amount < episodes.length
        ? episodes.slice(0, amount)
        : episodes
}
