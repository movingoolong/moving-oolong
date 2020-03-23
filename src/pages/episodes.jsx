import React, { useState } from "react";
import { Button, Grid, withStyles } from "@material-ui/core";
import { graphql, navigate } from "gatsby"
import { useQueryParam, StringParam } from 'use-query-params';

// Components
import EpisodePageHeader from "components/EpisodePage/EpisodePageHeader";
import FilteredPosts from "components/Posts/FilteredPosts";
import TagSelectionInput from "components/EpisodePage/TagSelectionInput";
import useTags from "hooks/useTags";

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

// const onClick = () => {
//   navigate("/episodes?tags=Hello,My,Name,Is", {
//     search: ""
//   });
// }

export default withStyles(styles)((props) => {
  const { classes, data, location } = props;
  const [urlTags, setURLTags] = useQueryParam("tags", StringParam);
  const { tags, setTags } = useTags(urlTags);

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
      <EpisodePageHeader />
      <Grid container alignItems="flex-start" justify="center">
        <Grid item xs={12} sm={3} lg={1}>
          <TagSelectionInput tags={tags} urlTags={urlTags} setURLTags={setURLTags} />
        </Grid>
        <Grid item xs={12} sm={9} lg={11}>
          <FilteredPosts
            tags={tags}
            showDescription={true}
            posts={data.allMarkdownRemark.edges}
            allImages={data.allFile.edges}
          />
        </Grid>
      </Grid>


    </>
  );
})