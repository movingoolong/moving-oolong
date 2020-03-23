import React from "react";
import { graphql } from "gatsby"
import { withStyles } from "@material-ui/core";

// Components
import PostPageContent from "components/Posts/PostPageContent";
import PostSuggestions from "components/Posts/PostSuggestions";

const styles = theme => ({
  root: {

  },
});

function PostPageTemplate(props) {
  const { classes, data, pageContext } = props;

  return (
    <>
      <PostPageContent post={data.markdownRemark} img={data.file.childImageSharp} />
      <PostSuggestions
        nextTitle={pageContext.nextTitle}
        nextSlug={pageContext.nextSlug}
        prevTitle={pageContext.prevTitle}
        prevSlug={pageContext.prevSlug}
      />
    </>
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