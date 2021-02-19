import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        verticalAlign: "middle",
    },
})

function Logo() {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `)
    return (
        <>
            <Img
                className={classes.root}
                alt="Moving Oolong logo"
                fixed={data.file.childImageSharp.fixed}
            />
        </>
    )
}

export default Logo
