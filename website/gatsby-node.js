const path = require(`path`)
const dayjs = require("dayjs")
const { createFilePath } = require(`gatsby-source-filesystem`)
const siteConfig = require("./data/SiteConfig")
const tsconfig = require("./tsconfig.json")

const trimString = (str) => str.substring(0, str.length - 2)

// Takes in paths defined in tsconfig.json, strips them of * and then adds them as webpack aliases
exports.onCreateWebpackConfig = ({ actions }) => {
    const aliases = tsconfig["compilerOptions"]["paths"]
    const webpackAliases = {}
    for (let key in aliases) {
        const value = trimString(aliases[key][0])
        webpackAliases[trimString(key)] = path.isAbsolute(value) ? value : path.resolve(value)
    }
    actions.setWebpackConfig({
        resolve: {
            alias: webpackAliases
        }
    })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postPageTemplate = path.resolve(
        `./src/templates/PostPageTemplate.tsx`
    )
    const result = await graphql(`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "episode" } } }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            imgsrc
                            date
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        console.error(result.errors)
        throw result.errors
    }

    const postsEdges = result.data.allMarkdownRemark.edges

    postsEdges.sort((postA, postB) => {
        const dateA = dayjs(
            postA.node.frontmatter.date,
            siteConfig.dateFromFormat
        )

        const dateB = dayjs(
            postB.node.frontmatter.date,
            siteConfig.dateFromFormat
        )

        if (dateA.isBefore(dateB)) return 1
        if (dateB.isBefore(dateA)) return -1

        return 0
    })

    postsEdges.forEach((edge, index) => {
        let nextTitle = ""
        let nextSlug = ""
        let prevTitle = ""
        let prevSlug = ""

        if (index + 1 < postsEdges.length) {
            const nextEdge = postsEdges[index + 1]
            nextTitle = nextEdge.node.frontmatter.title
            nextSlug = nextEdge.node.fields.slug
        }

        if (index - 1 >= 0) {
            const prevEdge = postsEdges[index - 1]
            prevTitle = prevEdge.node.frontmatter.title
            prevSlug = prevEdge.node.fields.slug
        }

        createPage({
            path: edge.node.fields.slug,
            component: postPageTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: edge.node.fields.slug,
                imgsrc: edge.node.frontmatter.imgsrc,
                nextTitle: nextTitle,
                nextSlug: nextSlug,
                prevTitle: prevTitle,
                prevSlug: prevSlug,
            },
        })
    })
}
