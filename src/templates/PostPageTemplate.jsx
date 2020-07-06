import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Container } from "@material-ui/core"
import { Disqus } from "gatsby-plugin-disqus"
import config from "data/SiteConfig"

// Components
import PostPageContent from "components/Posts/PostPageContent"
import PostSuggestions from "components/Posts/PostSuggestions"

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
            <Helmet title={title}>
                <meta property="og:title" content={title} />
                <meta
                    property="og:image"
                    content={`${config.siteUrl}${data.file.childImageSharp.fluid.src}`}
                />
                <meta property="og:type" content="article" />
            </Helmet>
            <PostPageContent
                post={data.markdownRemark}
                img={data.file.childImageSharp}
            />
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
            html
            id
            frontmatter {
                title
                tags
                date
                link
            }
        }
        file(relativePath: { eq: $imgsrc }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
