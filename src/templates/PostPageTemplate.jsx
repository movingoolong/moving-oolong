import React from "react";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles } from "@material-ui/core";

// Components
import Layout from "components/Layout/Layout";

const styles = {
    root: {

    }
};

function PostPageTemplate(props) {
    // const { location, pageContext, data } = props;
    // const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
    // const { title, date, cover, tags } = data.markdownRemark.frontmatter;
    // const { body } = data.markdownRemark.html;

    const { classes, data } = props;
    const { post } = data.markdownRemark;
    const { img } = data.file.childImageSharp;

    return (
        <Layout>
            <div>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <Img fluid={data.file.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
        </Layout>
    );
}

export default withStyles(styles)(PostPageTemplate)

export const query = graphql`
query($slug: String, $cover: String) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
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