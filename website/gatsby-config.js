const queries = require("./src/utils/algolia")
require("dotenv").config()

const title = "Moving Oolong Podcast"
const description = "Raw, unfiltered conversations between 3 best friends. We’re Asian American young women who started this podcast to share our stories and growing pains."

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
        // {
        //     resolve: `gatsby-plugin-algolia`,
        //     options: {
        //         appId: process.env.GATSBY_ALGOLIA_APP_ID,
        //         apiKey: process.env.ALGOLIA_ADMIN_KEY,
        //         queries,
        //         chunkSize: 1000, // default: 1000
        //         enablePartialUpdates: false,
        //         concurrentQueries: true,
        //         matchFields: ["slug"],
        //     },
        // },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: process.env.GATSBY_SANITY_PROJECT_ID,
                dataset: process.env.GATSBY_SANITY_DATASET,
            }
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
