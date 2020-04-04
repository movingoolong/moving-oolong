const urljoin = require("url-join");
const config = require("./data/SiteConfig");
const queries = require("./src/utils/algolia")
require("dotenv").config()

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright
    }
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          data: `data/`,
        }
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-use-query-params",
    "gatsby-background-image",
    // "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 1000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/assets/img`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "bios",
        path: `${__dirname}/content/bios/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images"
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 672
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
        ]
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: config.siteGATrackingID
    //   }
    // },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `movingoolongpod`
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#a9ddde"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-twitter",
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
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
        icon: "src/assets/img/logo.png",
      }
    },
    "gatsby-plugin-offline",
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: {
    //     setup(ref) {
    //       const ret = ref.query.site.siteMetadata.rssMetadata;
    //       ret.allMarkdownRemark = ref.query.allMarkdownRemark;
    //       ret.generator = "Moving Oolong Podcast";
    //       return ret;
    //     },
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           rssMetadata {
    //             site_url
    //             feed_url
    //             title
    //             description
    //             image_url
    //             copyright
    //           }
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize(ctx) {
    //           const { rssMetadata } = ctx.query.site.siteMetadata;
    //           return ctx.query.allMarkdownRemark.edges.map(edge => ({
    //             categories: edge.node.frontmatter.tags,
    //             date: edge.node.frontmatter.date,
    //             title: edge.node.frontmatter.title,
    //             description: edge.node.excerpt,
    //             url: rssMetadata.site_url + edge.node.fields.slug,
    //             guid: rssMetadata.site_url + edge.node.fields.slug,
    //             custom_elements: [
    //               { "content:encoded": edge.node.html },
    //               { author: config.userEmail }
    //             ]
    //           }));
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 timeToRead
    //                 fields { slug }
    //                 frontmatter {
    //                   title
    //                   cover
    //                   date
    //                   category
    //                   tags
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: config.siteRss,
    //         title: config.siteRssTitle
    //       }
    //     ]
    //   }
    // }
  ]
};
