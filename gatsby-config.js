const urljoin = require("url-join")
const config = require("./data/SiteConfig")
const queries = require("./src/utils/algolia")
require("dotenv").config()

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/

module.exports = {
    pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
    siteMetadata: {
        title: config.siteTitle,
        description: config.siteDescriptionShort,
        siteUrl: urljoin(config.siteUrl, config.pathPrefix),
        image_url: `${urljoin(
            config.siteUrl,
            config.pathPrefix
        )}/logos/logo-512.png`,
        copyright: config.copyright,
    },
    plugins: [
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    data: `data/`,
                    src: `src/`,
                },
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-material-ui",
        "gatsby-plugin-use-query-params",
        "gatsby-background-image",
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 1000, // default: 1000
                enablePartialUpdates: false,
                concurrentQueries: false,
                matchFields: ["slug"],
            },
        },
        // {
        //     resolve: "gatsby-plugin-transition-link",
        //     options: {
        //         layout: require.resolve(`./src/components/Layout/Layout.tsx`),
        //     },
        // },
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
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/content/posts/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "bios",
                path: `${__dirname}/content/bios/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "options",
                path: `${__dirname}/content/options/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "descriptions",
                path: `${__dirname}/content/descriptions/`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 672,
                        },
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-autolink-headers",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `movingoolongpod`,
            },
        },
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                color: "#a9ddde",
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-catch-links",
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: "/sitemap.xml",
                query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
            },
        },
        "gatsby-plugin-typegen",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                description: config.siteDescription,
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
