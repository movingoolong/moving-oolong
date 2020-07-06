import React from "react"

// Components
import PostGrid from "components/Posts/PostGrid"

import {getArrayFromTags} from "hooks/useTags"

function FilteredPosts(props) {
    const { tags, posts, allImages, showDescription } = props
    const tagsArray = getArrayFromTags(tags)

    const containsTags = (postTags) => {
        let i = 0
        while (i < tagsArray.length) {
            if (postTags.includes(tagsArray[i])) return true
            i++
        }
        return false
    }

    const filteredPosts =
    tagsArray.length > 0
            ? posts.filter((post) =>
                  post.node.frontmatter.tags.some(containsTags)
              )
            : posts

    return (
        <PostGrid
            showDescription={showDescription}
            posts={filteredPosts}
            allImages={allImages}
        />
    )
}

export default FilteredPosts
