import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components
import Layout from "components/Layout/Layout";
import Bio from "components/About/Bio";
import SiteDescription from "components/About/SiteDescription";

const styles = theme => ({
    root: {
        width: "100%",
    },
    item: {
        marginTop: theme.spacing(2),
    }
});

function AboutPage(props) {
    const { classes } = props;
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "bio"}}}) {
          edges {
            node {
              html
              id
              frontmatter {
                category
                name
                propic
                twitter
                instagram
              }
            }
          }
        }
        allFile(filter: {absolutePath: {regex: "static/assets/"}}) {
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
    `);
    const allImages = data.allFile.edges;
    return (
        <>
            <Layout>
                <Container maxWidth="lg">
                    <SiteDescription />
                    <Grid container spacing={3} justify="center" alignItems="stretch">
                        {data.allMarkdownRemark.edges.map(item =>
                            <Grid item className={classes.item} xs={12} md={4} key={item.node.id}>
                              {console.log(item.node)}
                                <Bio
                                    name={item.node.frontmatter.name}
                                    propic={item.node.frontmatter.propic}
                                    description={item.node.html}
                                    allImages={allImages}
                                    // facebook={item.node.frontmatter.facebook}
                                    instagram={item.node.frontmatter.instagram}
                                    twitter={item.node.frontmatter.twitter}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Layout>
        </>
    );
}

export default withStyles(styles)(AboutPage)