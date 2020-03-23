import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import PostPreview from "./PostPreview";
const styles = theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  item: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

function PostGrid(props) {
  const { classes, posts, allImages, showDescription } = props;

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3} alignItems="stretch" alignContent="stretch" justify="center">
        {posts.map(post =>
          <Grid item className={classes.item} xs={12} sm={4} key={post.node.id}>
            <PostPreview postInfo={post.node} allImages={allImages} showDescription={showDescription} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(PostGrid)