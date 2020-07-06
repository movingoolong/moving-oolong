import { useStaticQuery, graphql } from "gatsby"

export default function useEpisodes() {
    const data = useStaticQuery<GatsbyTypes.AllEpisodesQuery>(graphql`
        query AllEpisodes {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "episode" } } }
                sort: { order: DESC, fields: frontmatter___date }
            ) {
                edges {
                    node {
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
                }
            }
            allFile(filter: { absolutePath: { regex: "static/assets/" } }) {
                edges {
                    node {
                        ...FluidImage
                    }
                }
            }
        }
    `)
}
