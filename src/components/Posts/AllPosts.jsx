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
      }
    `);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {data.allMarkdownRemark.edges.map(post =>
                    <Grid item xs={8} md={4} key={post.node.id}>
                        <PostPreview postInfo={post.node} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(AllPosts)