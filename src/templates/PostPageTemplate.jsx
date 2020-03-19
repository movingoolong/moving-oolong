import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Grid, withStyles } from "@material-ui/core";

// Components
import Layout from "components/Layout/Layout";
import PostPageContent from "components/Posts/PostPageContent";
import PostSuggestions from "components/Posts/PostSuggestions";

const styles = theme => ({
  root: {

  },
});

function PostPageTemplate(props) {
  // const { location, pageContext, data } = props;
  // const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
  // const { title, date, cover, tags } = data.markdownRemark.frontmatter;
  // const { body } = data.markdownRemark.html;

  const { classes, data, pageContext } = props;
  console.log(data);

  return (
    <Layout>
      <PostPageContent post={data.markdownRemark} img={data.file.childImageSharp} />
      <PostSuggestions 
        nextTitle={pageContext.nextTitle}
        nextSlug={pageContext.nextSlug}
        prevTitle={pageContext.prevTitle}
        prevSlug={pageContext.prevSlug}
      />
    </Layout>
  );
}

export default withStyles(styles)(PostPageTemplate)

export const query = graphql`
query($slug: String, $cover: String) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      tags
      date
      link
    }
  }
  file(relativePath: {eq: $cover}) {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
  }
}
`