import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core";

// Components
import AllPosts from "components/Posts/AllPosts";
const styles = theme => ({
    root: {
        
    },
    title: {
        textAlign: "left",
        color: theme.palette.primary.main,
        margin: theme.spacing(2),
        marginBottom: 0,
    },
    link: {
        textAlign: "right",
        textTransform: "underlined",
        color: theme.palette.primary.dark,
        marginRight: theme.spacing(2),
    },
});

function FeaturedPosts(props) {
    const { classes } = props;
    // const data = useStaticQuery(graphql`
    // {
    //     allMarkdownRemark(filter: {frontmatter: {category: {eq: "episode"}}}, sort: {order: DESC, fields: frontmatter___date}) {
    //       edges {
    //         node {
    //           fields {
    //             slug
    //           }
    //           frontmatter {
    //             title
    //             tags
    //             date
    //             category
    //             cover
    //           }
    //           html
    //           id
    //         }
    //       }
    //     }
    //     allFile(filter: {absolutePath: {regex: "static/assets/"}}) {
    //       edges {
    //         node {
    //           id
    //           absolutePath
    //           childImageSharp {
    //             fluid {
    //               ...GatsbyImageSharpFluid
    //             }
    //           }
    //         }
    //       }
    //     }
    // }
    // `);

    return (
        <>
            <h1 className={classes.title}>Featured Episodes</h1>
            {/* <Link className={classes.link} to="/episodes">
                <h4><i>See all episodes</i></h4>
            </Link> */}
            
            <AllPosts amount={3} showDescription={false}/>
        </>
    );
}

export default withStyles(styles)(FeaturedPosts)