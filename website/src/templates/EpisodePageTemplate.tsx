// import React from "react"
// import { graphql } from "gatsby"
// import { Helmet } from "react-helmet"
// import { Container } from "@material-ui/core"

// // Components
// import EpisodeContent from "@components/Episode/EpisodeContent"
// import PostSuggestions from "@components/Posts/PostSuggestions"
// import SEO from "@components/General/SEO"

// type EpisodePageTemplateProps = {

// }

// function EpisodePageTemplate(props) {
//     const { data, pageContext, location } = props

//     const title = data.markdownRemark.frontmatter.title

//     return (
//         <>
//             <SEO
//                 title={title}
//             />
//             <EpisodeContent episode={data.markdownRemark} img={data.file} />
//             <PostSuggestions
//                 nextTitle={pageContext.nextTitle}
//                 nextSlug={pageContext.nextSlug}
//                 prevTitle={pageContext.prevTitle}
//                 prevSlug={pageContext.prevSlug}
//             />
//         </>
//     )
// }

// export default EpisodePageTemplate

// export const query = graphql`
//     query EpisodePage($slug: String) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             ...Episode
//         }
//         file(relativePath: { eq: $imgsrc }) {
//             ...FluidImage
//         }
//     }
// `
