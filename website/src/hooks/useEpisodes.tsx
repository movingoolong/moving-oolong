import { useStaticQuery, graphql } from "gatsby"
import { mapImgToNode } from "@utils/hookUtils"
import { TagState, getArrayFromTags } from "@hooks/useTags"

type EpisodeNode = GatsbyTypes.AllEpisodesQuery["allMarkdownRemark"]["edges"][0]

export type EpisodeArrayType = ReturnType<typeof useEpisodes>
export type EpisodeType = EpisodeArrayType[0]

export default function useEpisodes(tags?: TagState) {
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

    if (tags) {
        const tagsArray = getArrayFromTags(tags)
        if (tagsArray.length > 0) {
            episodes = episodes.filter((episode) =>
                episode.node.frontmatter?.tags?.some((postTags) => {
                    if (!postTags) return false

                    let i = 0
                    while (i < tagsArray.length) {
                        if (postTags.includes(tagsArray[i])) return true
                        i++
                    }
                    return false
                })
            )
        }
    }

    return episodes
}
