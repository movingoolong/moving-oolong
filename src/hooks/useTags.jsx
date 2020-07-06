import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

function getInitialState() {
    const data = useStaticQuery(graphql`
        query AllTags {
            markdownRemark(fileAbsolutePath: { regex: "/episode-tags/" }) {
                frontmatter {
                    options
                }
            }
        }
    `)

    if (!data.markdownRemark.frontmatter?.options) throw new Error("No tag options exist")

    let state = {}
    data.markdownRemark.frontmatter.options.forEach((tag) => state[tag] = false)

    return state
}

export default function useTags(urlTags) {
    const [tags, setTags] = useState(getInitialState())
    
    useEffect(() => {
        const newState = {}
        const tagsToCheck = urlTags !== undefined ? urlTags.split(",") : []
        Object.entries(initialState).forEach(([key, __]) => {
            newState[key] = tagsToCheck.includes(key)
        })
        setTags(newState)
    }, [urlTags])

    return {
        tags,
    }
}
