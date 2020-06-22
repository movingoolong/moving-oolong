import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import PostGrid from "components/Posts/PostGrid";

function AllPosts(props) {
  const { amount, showDescription } = props;
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "episode" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
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
      allFile(filter: { absolutePath: { regex: "static/assets/" } }) {
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

  const edges =
    amount != null
      ? data.allMarkdownRemark.edges.slice(0, amount)
      : data.allMarkdownRemark.edges;

  return (
    <PostGrid
      showDescription={showDescription}
      posts={edges}
      allImages={data.allFile.edges}
    />
  );
}

export default AllPosts;
