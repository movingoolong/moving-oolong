import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export type TagState = Record<string, boolean>

function getInitialState(): TagState {
    const data = useStaticQuery<GatsbyTypes.AllTagsQuery>(graphql`
        query AllTags {
            allSanityEpisode {
                nodes {
                    episodeTags {
                        value
                    }
                }
            }
        }
    `)

    if (!data.allSanityEpisode?.nodes) throw new Error("No episodes exist")

    let state: TagState = {}
    data.allSanityEpisode.nodes.forEach((node) => {
        node.episodeTags.forEach((sanityTag) => {
            state[sanityTag?.value] = false
        })
    })
    return state
}

export function getArrayFromTags(tags: TagState): string[] {
    const tagsArray: string[] = []

    Object.entries(tags).forEach(([key, val]) => {
        if (val) tagsArray.push(key)
    })

    return tagsArray
}

export default function useTags(urlTags?: string) {
    //const initialState = useMemo(() => getInitialState(), [])
    const initialState = getInitialState()
    const [tags, setTags] = useState(initialState)

    useEffect(() => {
        const newState: TagState = {}
        const tagsToCheck = urlTags !== undefined ? urlTags.split(",") : []
        Object.entries(initialState).forEach(([key, __]) => {
            newState[key] = tagsToCheck.includes(key)
        })
        setTags(newState)
    }, [urlTags])

    return tags
}
