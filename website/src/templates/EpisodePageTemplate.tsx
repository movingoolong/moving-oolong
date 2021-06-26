import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Container } from "@material-ui/core"
import config from "data/SiteConfig"

// Components
import EpisodeContent from "@components/Episode/EpisodeContent"
import PostSuggestions from "@components/Posts/PostSuggestions"
import SEO from "@components/General/SEO"

function PostPageTemplate(props) {
    const { data, pageContext, location } = props

    const title = data.markdownRemark.frontmatter.title

    return (
        <>
            <SEO
                title={title}
            />
            <EpisodeContent episode={data.markdownRemark} img={data.file} />
            <PostSuggestions
                nextTitle={pageContext.nextTitle}
                nextSlug={pageContext.nextSlug}
                prevTitle={pageContext.prevTitle}
                prevSlug={pageContext.prevSlug}
            />
        </>
    )
}

export default PostPageTemplate

export const query = graphql`
    query($slug: String, $imgsrc: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            ...Episode
        }
        file(relativePath: { eq: $imgsrc }) {
            ...FluidImage
        }
    }
`
