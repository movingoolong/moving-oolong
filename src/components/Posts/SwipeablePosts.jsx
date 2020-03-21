import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Grid, IconButton, withStyles } from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// Components
import PostPreview from "components/Posts/PostPreview";

const styles = theme => ({
    root: {
        marginBottom: theme.spacing(2),
        height: "100%",
        width: "100%",
    },
    iconLeft: {
        marginRight: "auto",
    },
    iconRight: {
        marginLeft: "auto",
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

function SwipeablePosts(props) {
    const { classes } = props;
    const [activeStep, setActiveStep] = useState(0);
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "episode"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 9) {
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
    `);


    //const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleStepChange = step => {
        setActiveStep(step);
    };

    const edges = data.allMarkdownRemark.edges;
    const maxSteps = Math.floor(edges.length / 3);
    const steps = [];
    let i = 0;
    for (i = 0; i < maxSteps; i++) {
        const cur = i * 3;
        steps.push(
            <Grid container spacing={3} alignItems="stretch" justify="center" key={i}>
                <Grid item className={classes.item} sm={4} key={edges[cur].node.id}>
                    <PostPreview postInfo={edges[cur].node} allImages={data.allFile.edges} showDescription={false} />
                </Grid>
                {cur + 1 < edges.length ?
                    <Grid item className={classes.item} sm={4} key={edges[cur + 1].node.id}>
                        <PostPreview postInfo={edges[cur + 1].node} allImages={data.allFile.edges} showDescription={false} />
                    </Grid>
                    : <></>}
                {cur + 2 < edges.length ?
                    <Grid item className={classes.item} sm={4} key={edges[cur + 2].node.id}>
                        <PostPreview postInfo={edges[cur + 2].node} allImages={data.allFile.edges} showDescription={false} />
                    </Grid>
                    : <></>}
            </Grid>
        );
    }

    console.log(steps);

    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <IconButton className={classes.iconLeft} aria-label="back button" onClick={handleBack} disabled={activeStep === 0}>
                        <ArrowBackIosIcon />
                    </IconButton>
                </Grid>
                <Grid item sm={11}>
                    <SwipeableViews
                        enableMouseEvents
                        slideStyle={{ overflow: "hidden" }}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                    >
                        {steps}
                    </SwipeableViews>
                </Grid>
                <Grid item>
                    <IconButton className={classes.iconRight} aria-label="forward button" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(SwipeablePosts)