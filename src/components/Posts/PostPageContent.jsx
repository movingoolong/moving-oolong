import React from "react";
import Img from "gatsby-image"
import { Container, Grid, withStyles } from "@material-ui/core";

// Components

const styles = theme => ({
    root: {

    },
    title: {
        textAlign: "center",
        fontSize: "48px",
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: "24px",
        },
    },
    body: {
        fontSize: "16px",
        color: theme.palette.primary.dark,
    },
});

function PostPageContent(props) {
    // const { location, pageContext, data } = props;
    // const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
    // const { title, date, cover, tags } = data.markdownRemark.frontmatter;
    // const { body } = data.markdownRemark.html;

    const { classes, post, img } = props;

    return (
        <Container>
            <Grid container alignItems="flex-start" justify="center" alignContent="stretch" spacing={2}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>{post.frontmatter.title}</h1>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Img fluid={img.fluid} />
                </Grid>
                <Grid item container alignItems="center" justify="center" xs={12} sm={6}>
                    <Grid item xs={12}>
                        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.link }} />
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.body} dangerouslySetInnerHTML={{ __html: post.html }} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(PostPageContent)