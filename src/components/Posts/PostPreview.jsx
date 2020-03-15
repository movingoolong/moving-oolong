import React from "react";
import { Link } from "gatsby";

import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, CardActions, withStyles } from "@material-ui/core";
import PostPreviewImage from "./PostPreviewImage";
import moment from "moment";
import config from "data/SiteConfig";

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
        width: "100%",
    },
    link: {
        textDecoration: 'none',
    },
    header: {
        color: theme.palette.primary.main,
    }
});

function PostPreview(props) {
    const { classes, postInfo, allImages } = props;
    const { title, tags, date, cover, slug } = postInfo.frontmatter;

    return (
        <Card className={classes.root}>
            <Link className={classes.link} to={`/${slug}`}>
                <CardActionArea>
                    <PostPreviewImage allImages={allImages} coverHeight={200} coverImgSrc={`static/${cover}`} />
                    <CardHeader className={classes.header} title={title} subheader={moment(date).format(
                        config.dateFormat)} />
                </CardActionArea>
            </Link>

            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(PostPreview)