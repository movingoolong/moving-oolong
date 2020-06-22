import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    verticalAlign: "middle",
  },
});

function Logo(props) {
  const { classes } = props;
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);
  return (
    <>
      <Img
        className={classes.root}
        alt="Moving Oolong logo"
        fixed={data.file.childImageSharp.fixed}
      />
    </>
  );
}

export default withStyles(styles)(Logo);
