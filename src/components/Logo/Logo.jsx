import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Logo(props) {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "logo.png"}) {
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
            <Img alt="Moving Oolong logo" fixed={data.file.childImageSharp.fixed} />
        </>
    );
}

export default Logo;