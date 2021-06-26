import { graphql } from "gatsby"


export const fluidImageFragment = graphql`
    fragment FluidImage on SanityImage {
        asset {
            gatsbyImageData(formats: WEBP, placeholder: BLURRED)
            altText
        }
    }
`

export const episodeFragment = graphql`
    fragment Episode on SanityEpisode {
        _id
        _key
        _updatedAt
        title
        datetime(formatString: "MMM D, YYYY")
        season {
            season
            _id
        }
        guest {
            _id
        }
        spotify
        episodeTags {
            _key
            label
            value
        }
        image {
            ...FluidImage
        }
        _rawDescription(resolveReferences: { maxDepth: 2 })
        _rawReferences(resolveReferences: { maxDepth: 2 })
        slug {
            current
            _key
            _type
        }
    }
`

