const query = `{
    allMarkdownRemark(
      filter: {
        frontmatter: {category: {eq: "episode"}}
      }
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
              excerpt(pruneLength: 100, format: HTML)
              id
            }
        }
    }
  }`

const flatten = (arr) =>
    arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
        ...frontmatter,
        ...fields,
        ...rest,
    }))
const settings = {}

const queries = [
    {
        query: query,
        transformer: ({ data }) => flatten(data.allMarkdownRemark.edges),
        indexName: `Posts`,
        settings,
    },
]

module.exports = queries
