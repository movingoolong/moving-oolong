import { graphql } from "gatsby"

// export const episodeFragment = graphql`
//     fragment 
// `

export const fluidImageFragment = graphql`
    fragment FluidImage on File {
        absolutePath
        childImageSharp {
            fluid(quality: 100, pngQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
