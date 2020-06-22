import React from "react";
import Img from "gatsby-image";
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import TagLink from "components/Posts/TagLink";

const styles = (theme) => ({
  root: {},
  title: {
    textAlign: "center",
    fontSize: "48px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  embed: {
    width: "100%",
  },
  body: {
    fontSize: "16px",
    color: theme.palette.secondary.main,
    "& a": {
      color: theme.palette.secondary.dark,
    },
  },
  tags: {
    color: theme.palette.secondary.main,
    fontSize: "12px",
  },
});

function PostPageContent(props) {
  const { classes, post, img } = props;

  return (
    <Container>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        alignContent="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Img fluid={img.fluid} />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="stretch"
          justify="space-between"
          xs={12}
          sm={6}
        >
          <Grid item>
            <div
              className={classes.embed}
              dangerouslySetInnerHTML={{ __html: post.frontmatter.link }}
            />
          </Grid>
          <Grid item>
            <div
              className={classes.body}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Grid>
          <Grid item>
            <div className={classes.tags}>
              {post.frontmatter.tags.map((tag) => (
                <TagLink tag={tag} key={tag} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(PostPageContent);
