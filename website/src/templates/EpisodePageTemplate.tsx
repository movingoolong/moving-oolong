import React from "react"
import { graphql, PageProps } from "gatsby"

// Components
import EpisodeContent from "@components/Episode/EpisodeContent"
import PostSuggestions from "@components/Posts/PostSuggestions"
import SEO from "@components/General/SEO"

export const query = graphql`
    query EpisodePageTemplate($slug: String) {
        sanityEpisode(slug: {current: {eq: $slug}})
            ...Episode
        }
    }
`

function EpisodePageTemplate({
    data,
    pageContext,
}: PageProps<GatsbyTypes.EpisodePageTemplateQuery>) {
    const title = data.markdownRemark.frontmatter.title

    return (
        <>
            <SEO title={title} />
            <EpisodeContent episode={data.sanityEpisode} />
            <PostSuggestions
                nextTitle={pageContext.nextTitle}
                nextSlug={pageContext.nextSlug}
                prevTitle={pageContext.prevTitle}
                prevSlug={pageContext.prevSlug}
            />
        </>
    )
}

export default EpisodePageTemplate
