import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby"
import { Container, Grid, withStyles } from "@material-ui/core";
import config from "data/SiteConfig";

// Components
import Bio from "components/About/Bio";
import SiteDescription from "components/About/SiteDescription";

const styles = theme => ({
  root: {
    width: "100%",
  },
  item: {
    marginTop: theme.spacing(2),
  }
});

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "bio"}}}) {
    edges {
      node {
        html
        id
        frontmatter {
          category
          name
          propic
          twitter
          instagram
        }
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
  const allImages = data.allFile.edges;
  const title = "About | Moving Oolong";
  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={config.siteDescriptionShort} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={config.siteDescriptionShort} />
        <meta property="og:image" content={`${config.siteUrl}/logos/logo-1024.png`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container maxWidth="lg">
        <SiteDescription />
        <Grid container spacing={3} justify="center" alignItems="stretch">
          {data.allMarkdownRemark.edges.map(item =>
            <Grid item className={classes.item} xs={12} sm={4} key={item.node.id}>
              <Bio
                name={item.node.frontmatter.name}
                propic={item.node.frontmatter.propic}
                description={item.node.html}
                allImages={allImages}
                // facebook={item.node.frontmatter.facebook}
                instagram={item.node.frontmatter.instagram}
                twitter={item.node.frontmatter.twitter}
              />
            </Grid>
          )}
        </Grid>
      </Container>

    </>
  );
})