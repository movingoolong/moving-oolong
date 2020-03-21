import React from "react";
import { Link } from "gatsby";

import { Button, Card, CardActionArea, CardContent, CardHeader, CardActions, Grid, withStyles } from "@material-ui/core";
import PostPreviewImage from "./PostPreviewImage";
import LabelIcon from '@material-ui/icons/Label';
import moment from "moment";
import config from "data/SiteConfig";

const styles = theme => ({
    root: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        margin: theme.spacing(1),
    },
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    header: {
        paddingBottom: 0,
    },
    link: {
        textDecoration: 'none',
        color: "#ffffff",
    },
    title: {
        color: theme.palette.primary.main,
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
    },
    date: {
        color: theme.palette.secondary.main,
        margin: 0,
        marginTop: theme.spacing(1),
    },
    description: {
        height: "65px",
        overflow: "hidden",

        '& p': {
            fontSize: "14px",
            color: theme.palette.secondary.main,
        },

        '& a': {
            color: theme.palette.secondary.dark,
        }

    },
    action: {
        //display: "flex",
        flexGrow: 1,
        margin: 0,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingTop: 0,
    },
    grow: {
        flexGrow: 1,
    },
    tags: {
        color: theme.palette.secondary.main,
        fontSize: "10px",
    },

    button: {
        //marginLeft: "auto",
    }
});

function PostPreview(props) {
    const { classes, postInfo, allImages, showDescription } = props;
    const { title, tags, date, cover } = postInfo.frontmatter;
    const { slug } = postInfo.fields;

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Link className={classes.link} to={slug}>
                    <CardActionArea>
                        <PostPreviewImage allImages={allImages} coverHeight={200} coverImgSrc={`static/${cover}`} />
                        <CardContent className={classes.header}>
                            <h2 className={classes.title}>{title}</h2>
                            <h4 className={classes.date}>{moment(date).format(
                                config.dateFormat)}</h4>
                            {showDescription ?
                                <div
                                    className={classes.description}
                                    dangerouslySetInnerHTML={{ __html: postInfo.html }}
                                />
                                : <></>
                            }
                        </CardContent>
                    </CardActionArea>
                </Link>
            </div>


            <CardActions className={classes.action}>
                <Grid container alignItems="flex-end" justify="space-between">
                    <Grid item xs="6">
                        <div className={classes.tags}>
                            {tags}
                        </div>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} color="secondary" size="small" href={slug}>
                            Read More
                        </Button>
                    </Grid>
                </Grid>
                {/* <LabelIcon className={classes.tagIcon} color="primary" /> */}
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(PostPreview)