const config = {
    siteTitle: "Moving Oolong", // Site title.
    siteTitleShort: "Moving Oolong", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "Moving Oolong Podcast Website", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://movingoolongpod.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
    siteDescriptionShort:
        "Raw, unfiltered conversations between 3 best friends. We’re Asian American young women who started this podcast to share our stories and growing pains.",
    siteDescriptionLong:
        "Raw, unfiltered conversations between 3 best friends. We’re Asian American young women who started this podcast to share our stories and growing pains of preparing to graduate college. Our intersecting identities as Asian American women play a large role in shaping our experiences as young adults and we hope this podcast acts as a time-capsule to remember and reflect on this time of transition in our lives. We invite you to listen & enjoy stories of us moving along!", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteRssTitle: "Moving Oolong RSS", // Title of the RSS feed
    //siteFBAppID: "1825356251115265", // FB Application ID for using app insights
    //siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
    //disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "MMM D, YYYY", // Date format for display.
    userName: "Moving Oolong", // Username to display in the author segment.
    userEmail: "movingoolong@gmail.com", // Email used for RSS feed's author segment
    userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "College Park, MD", // User location to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
        {
            label: "Facebook",
            url: "https://www.facebook.com/movingoolong/",
            iconClassName: "fa fa-facebook",
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/movingoolongpod/",
            iconClassName: "fa fa-instagram",
        },
        {
            label: "Email",
            url: "mailto:movingoolong@gmail.com",
            iconClassName: "fa fa-envelope",
        },
    ],
    copyright: "Copyright © 2020. Moving Oolong", // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = ""
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
    config.siteRss = `/${config.siteRss}`

module.exports = config
