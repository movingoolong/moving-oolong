import React from "react";
import { Link } from "gatsby";

import { Button, Card, CardActionArea, CardContent, CardHeader, CardActions, withStyles } from "@material-ui/core";
import PostPreviewImage from "./PostPreviewImage";
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
    },
    date: {
        color: theme.palette.primary.dark,
        paddingBottom: 0,
    },
    description: {
        height: "65px",
        overflow: "hidden",

        '& p': {
            fontSize: "14px",
            color: theme.palette.primary.dark,
        },
    },
    action: {
        flexGrow: 1,
        margin: 0,
        paddingTop: 0,
    },
    button: {
        marginLeft: "auto",
        color: theme.palette.primary.main,
    }
});

function PostPreview(props) {
    const { classes, postInfo, allImages } = props;
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
                            <div className={classes.description} dangerouslySetInnerHTML={{ __html: postInfo.html }} />
                        </CardContent>
                    </CardActionArea>
                </Link>
            </div>


            <CardActions className={classes.action}>
                <Button className={classes.button} size="small" href={slug}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(PostPreview)