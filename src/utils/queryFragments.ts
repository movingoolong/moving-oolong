import { graphql } from "gatsby"

export const allEpisodeFragment = graphql`
    fragment EpisodeEdges on MarkdownRemarkConnection {
        edges {
            node {
                ...Episode
            }
        }
    }
`

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
        }
        html
        id
    }
`

export const fluidImageEdgeFragment = graphql`
    fragment FluidImageEdges on FileConnection {
        edges {
            node {
                ...FluidImage
            }
        }
    }
`

export const fluidImageFragment = graphql`
    fragment FluidImage on File {
        absolutePath
        relativePath
        childImageSharp {
            fluid(quality: 100, pngQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
