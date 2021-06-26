const queries = require("./src/utils/algolia")
require("dotenv").config()

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/

const title = "Moving Oolong Podcast"
const description = ""

module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: title,
    },
    flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-material-ui",
        "gatsby-plugin-use-query-params",
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 1000, // default: 1000
                enablePartialUpdates: false,
                concurrentQueries: true,
                matchFields: ["slug"],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "static",
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "img",
                path: `${__dirname}/src/assets/img`,
            },
        },
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: "#a9ddde",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-catch-links",
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-typegen",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: title,
                short_name: title,
                description: description,
                start_url: "/",
                background_color: "#e0e0e0",
                theme_color: "#c62828",
                display: "minimal-ui",
                icon: "src/assets/img/logo.png",
            },
        },
        "gatsby-plugin-offline",
    ],
}
