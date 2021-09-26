const path = require(`path`)
const dayjs = require("dayjs")
const { createFilePath } = require(`gatsby-source-filesystem`)
const tsconfig = require("./tsconfig.json")

const trimString = (str) => str.substring(0, str.length - 2)

// Takes in paths defined in tsconfig.json, strips them of * and then adds them as webpack aliases
exports.onCreateWebpackConfig = ({ actions }) => {
    const aliases = tsconfig["compilerOptions"]["paths"]
    const webpackAliases = {}
    for (let key in aliases) {
        const value = trimString(aliases[key][0])
        webpackAliases[trimString(key)] = path.isAbsolute(value)
            ? value
            : path.resolve(value)
    }
    actions.setWebpackConfig({
        resolve: {
            alias: webpackAliases,
        },
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allSanityEpisode(
                filter: { slug: { current: { ne: null } } }
                sort: { fields: datetime }
            ) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        throw result.errors
    }

    const episodes = result.data.allSanityEpisode.edges || []
    episodes.forEach((edge, index) => {
        let nextTitle = ""
        let nextSlug = ""
        let prevTitle = ""
        let prevSlug = ""

        if (index + 1 < episodes.length) {
            const nextEdge = episodes[index + 1]
            nextTitle = nextEdge.node.title
            nextSlug = nextEdge.node.slug.current
        }

        if (index - 1 >= 0) {
            const prevEdge = episodes[index - 1]
            prevTitle = prevEdge.node.title
            prevSlug = prevEdge.node.slug.current
        }

        createPage({
            path: `/${edge.node.slug.current}`,
            component: path.resolve(`./src/templates/EpisodePageTemplate.tsx`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: edge.node.slug.current,
                nextTitle: nextTitle,
                nextSlug: nextSlug,
                prevTitle: prevTitle,
                prevSlug: prevSlug,
            },
        })
    })
}
