import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Container } from "@material-ui/core"
import { Disqus } from "gatsby-plugin-disqus"
import config from "data/SiteConfig"

// Components
import EpisodeContent from "components/Episode/EpisodeContent"
import PostSuggestions from "components/Posts/PostSuggestions"
import SEO from "components/General/SEO"

function PostPageTemplate(props) {
    const { data, pageContext, location } = props
    const disqusConfig = {
        url: `${config.siteUrl + location.pathname}`,
        identifier: data.markdownRemark.id,
        title: data.markdownRemark.frontmatter.title,
    }

    const title = data.markdownRemark.frontmatter.title

    return (
        <>
            <SEO
                title={title}
                meta={[
                    {
                        property: "og:image",
                        content: `${config.siteUrl}${data.file.childImageSharp.gatsbyImageData.src}`,
                    },
                ]}
            />
            <EpisodeContent episode={data.markdownRemark} img={data.file} />
            <PostSuggestions
                nextTitle={pageContext.nextTitle}
                nextSlug={pageContext.nextSlug}
                prevTitle={pageContext.prevTitle}
                prevSlug={pageContext.prevSlug}
            />
            <Container>
                <Disqus config={disqusConfig} />
            </Container>
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
