import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import PostPreview from "./PostPreview";
const styles = {
    root: {

    }
};

function AllPosts(props) {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "episode"}}}, sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                title
                tags
                date
                category
                cover
                slug
              }
              html
              id
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

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} justify="center">
                {data.allMarkdownRemark.edges.map(post =>
                    <Grid item xs={12} md={4} key={post.node.id}>
                        <PostPreview postInfo={post.node} allImages={data.allFile.edges} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(AllPosts)