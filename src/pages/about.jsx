import React from "react"
import { graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core"

// Components
import Bio from "components/About/Bio"
import SiteDescription from "components/About/SiteDescription"
import SEO from "components/General/SEO"

const styles = (theme) => ({
    root: {
        width: "100%",
    },
    item: {
        marginTop: theme.spacing(2),
    },
})

export const query = graphql`
    {
        allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "bio" } } }
        ) {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        category
                        name
                        imgsrc
                        twitter
                        instagram
                    }
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
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

export default withStyles(styles)((props) => {
    const { classes, data } = props
    const allImages = data.allFile.edges
    return (
        <>
            <SEO title="About" />
            <Container maxWidth="lg">
                <SiteDescription />
                <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="stretch"
                >
                    {data.allMarkdownRemark.edges.map((item) => (
                        <Grid
                            item
                            className={classes.item}
                            xs={12}
                            sm={4}
                            key={item.node.id}
                        >
                            <Bio
                                name={item.node.frontmatter.name}
                                imgsrc={item.node.frontmatter.imgsrc}
                                description={item.node.html}
                                allImages={allImages}
                                // facebook={item.node.frontmatter.facebook}
                                instagram={item.node.frontmatter.instagram}
                                twitter={item.node.frontmatter.twitter}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
})
