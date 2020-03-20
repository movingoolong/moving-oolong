import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import PostPreview from "./PostPreview";
const styles = theme => ({
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
});

function AllPosts(props) {
    const { classes, amount, showDescription } = props;
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "episode"}}}, sort: {order: DESC, fields: frontmatter___date}) {
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

    const edges = amount != null ? data.allMarkdownRemark.edges.slice(0, amount) : data.allMarkdownRemark.edges;

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} alignItems="stretch" alignContent="stretch" justify="center">
                {edges.map(post =>
                    <Grid item className={classes.item} xs={12} md={4} key={post.node.id}>
                        <PostPreview postInfo={post.node} allImages={data.allFile.edges} showDescription={showDescription} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(AllPosts)