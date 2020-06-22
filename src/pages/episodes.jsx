import React, { useState } from "react"
import { Helmet } from "react-helmet"
import {
    Button,
    Hidden,
    SwipeableDrawer,
    Grid,
    withStyles,
} from "@material-ui/core"
import { graphql } from "gatsby"
import { useQueryParam, StringParam } from "use-query-params"
import config from "data/SiteConfig"

// Components
import EpisodePageHeader from "components/EpisodePage/EpisodePageHeader"
import FilteredPosts from "components/Posts/FilteredPosts"
import TagSelectionInput from "components/EpisodePage/TagSelectionInput"
import useTags from "hooks/useTags"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

// Images

const styles = (theme) => ({
    root: {},
})

export const query = graphql`
    {
        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "episode" } } }
            sort: { order: DESC, fields: frontmatter___date }
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
                        cover
                    }
                    html
                    id
                }
            }
        }
        allFile(filter: { absolutePath: { regex: "static/assets/" } }) {
            edges {
                node {
                    id
                    absolutePath
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

// const onClick = () => {
//   navigate("/episodes?tags=Hello,My,Name,Is", {
//     search: ""
//   });
// }

export default withStyles(styles)((props) => {
    const { classes, data, location } = props
    const title = "Episodes | Moving Oolong"
    const [urlTags, setURLTags] = useQueryParam("tags", StringParam)
    const { tags } = useTags(urlTags)

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }

        setDrawer(open)
    }

    // const tagMap = new Map();

    // data.allMarkdownRemark.edges.forEach((edge) => {
    //   edge.node.frontmatter.tags.forEach((tag) => {
    //     const tagAmount = tagMap.get(tag);
    //     if (tagAmount == undefined) {
    //       tagMap.set(tag, 1);
    //     } else {
    //       tagMap.set(tag, tagAmount + 1);
    //     }
    //   })
    // })

    // const initialState = {};
    //   tagMap.forEach((__, key) => {
    //       initialState[key] = false;
    //   });

    return (
        <>
            <Helmet title={title}>
                <meta
                    name="description"
                    content={config.siteDescriptionShort}
                />
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={config.siteDescriptionShort}
                />
                <meta
                    property="og:image"
                    content={`${config.siteUrl}/logos/logo-512.png`}
                />
                <meta property="og:type" content="website" />
            </Helmet>
            <EpisodePageHeader />
            <Grid container alignItems="flex-start" justify="center">
                <Hidden smUp>
                    <Button
                        onClick={toggleDrawer(true)}
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        startIcon={<ExpandMoreIcon />}
                    >
                        Filters
                    </Button>
                    <SwipeableDrawer
                        anchor="top"
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                        elevation={16}
                    >
                        <TagSelectionInput
                            tags={tags}
                            urlTags={urlTags}
                            setURLTags={setURLTags}
                        />
                    </SwipeableDrawer>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={12} sm={3} lg={2}>
                        <TagSelectionInput
                            tags={tags}
                            urlTags={urlTags}
                            setURLTags={setURLTags}
                        />
                    </Grid>
                </Hidden>

                <Grid item xs={12} sm={9} lg={10}>
                    <FilteredPosts
                        tags={tags}
                        showDescription={true}
                        posts={data.allMarkdownRemark.edges}
                        allImages={data.allFile.edges}
                    />
                </Grid>
            </Grid>
        </>
    )
})
