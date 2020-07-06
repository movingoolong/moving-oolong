import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export type TagState = Record<string, boolean>

function getInitialState(): TagState {
    const data = useStaticQuery<GatsbyTypes.AllTagsQuery>(graphql`
        query AllTags {
            markdownRemark(fileAbsolutePath: { regex: "/episode-tags/" }) {
                frontmatter {
                    options
                }
            }
        }
    `)

    if (!data.markdownRemark?.frontmatter?.options)
        throw new Error("No tag options exist")

    let state: TagState = {}
    data.markdownRemark.frontmatter.options.forEach(
        (tag = "") => (state[tag] = false)
    )
    return state
}

export function getArrayFromTags(tags: TagState): string[] {
    const tagsArray: string[] = []

    Object.entries(tags).forEach(([key, val]) => {
        if(val) tagsArray.push(key)
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
