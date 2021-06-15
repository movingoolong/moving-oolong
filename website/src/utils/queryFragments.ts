import { graphql } from "gatsby"

export const episodeFragment = graphql`
    fragment Episode on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            title
            tags
            date
            category
            imgsrc
            link
        }
        excerpt(pruneLength: 100, format: HTML)
        html
        id
    }
`

export const fluidImageFragment = graphql`
    fragment FluidImage on File {
        absolutePath
        relativePath
        childImageSharp {
            gatsbyImageData(
                quality: 100
                layout: CONSTRAINED
                formats: [WEBP]
                placeholder: BLURRED
            )
        }
    }
`
