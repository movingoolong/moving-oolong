import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { graphql } from "gatsby"

// Components
import EpisodePageHeader from "components/EpisodePage/EpisodePageHeader";
import PostGrid from "components/Posts/PostGrid";

// Images


const styles = theme => ({
  root: {

  },
});

export const query = graphql`
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
`

export default withStyles(styles)((props) => {
  const { classes, data } = props;

  return (
    <>
      <EpisodePageHeader />

      <PostGrid showDescription={true} posts={data.allMarkdownRemark.edges} allImages={data.allFile.edges} />
    </>
  );
})