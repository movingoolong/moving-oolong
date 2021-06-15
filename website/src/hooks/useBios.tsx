import { useStaticQuery, graphql } from "gatsby"
import { HasImageSrc, mapImgToNode } from "utils/hookUtils"

type BioNode = GatsbyTypes.AllBiosQuery["allMarkdownRemark"]["edges"][0]

export type BioArrayType = ReturnType<typeof useBios>
export type BioType = BioArrayType[0]

export default function useBios() {
    const data = useStaticQuery<GatsbyTypes.AllBiosQuery>(graphql`
        query AllBios {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "bio" } } }
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            category
                            name
                            imgsrc
                            twitter
                            instagram
                        }
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

    if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
        throw new Error("Error in formation of bio query")
    }

    return mapImgToNode<BioNode>(
        data.allMarkdownRemark.edges,
        data.allFile.edges
    )
}
