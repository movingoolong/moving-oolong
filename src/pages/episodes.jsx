import React from "react";
import { Button, Grid, withStyles } from "@material-ui/core";
import { graphql, navigate } from "gatsby"

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
  const { classes, data, location } = props;
  const onClick = () => {
    navigate("/episodes?tags=Hello,My,Name,Is", {
      search: ""
    });
  }

  const tagMap = new Map();

  data.allMarkdownRemark.edges.forEach((edge) => {
    const tags = edge.node.frontmatter.tags;
    const tagArray = tags != undefined ? tags[0].split("#") : [];
    tagArray.forEach((tag) => {
      const tagTrimmed = tag.trim();
      const tagAmount = tagMap.get(tagTrimmed);
      if(tagAmount == undefined) {
        tagMap.set(tagTrimmed, 1);
      } else {
        tagMap.set(tagTrimmed, tagAmount + 1);
      }

    })
  })

  console.log(tagMap);

  return (
    <>
      <EpisodePageHeader />

      <PostGrid showDescription={true} posts={data.allMarkdownRemark.edges} allImages={data.allFile.edges} />
    </>
  );
})