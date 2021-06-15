var plugins = [{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-material-ui',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-use-query-params',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-use-query-params/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-remark-autolink-headers',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"offsetY":0,"className":"anchor"},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n\n            allSitePage(\n              filter: {\n                path: {\n                  regex: \"/^(?!\\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/\"\n                }\n              }\n            ) {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }","createLinkInHead":true},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Moving Oolong","short_name":"Moving Oolong","start_url":"/","background_color":"#e0e0e0","theme_color":"#c62828","display":"minimal-ui","icon":"src/assets/img/logo.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"1b2d4f2c4acaf02c14c85e362fbe0636"},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/home/sloh/projects/moving-oolong/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'default-site-plugin',
      plugin: require('/home/sloh/projects/moving-oolong/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
