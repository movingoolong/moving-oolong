import React from "react";

import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, CardActions, withStyles } from "@material-ui/core";
import moment from "moment";
import config from "data/SiteConfig";

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
    },

    media: {
        width: "100%",
    },
});

function PostPreview(props) {
    const { classes, postInfo } = props;
    const { title, tags, date, cover } = postInfo.frontmatter;
    const coverImage = `static/${cover}`

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    src={coverImage}
                    title="Cover Photo"
                />
                <CardHeader title={title} subheader={moment(date).format(
                    config.dateFormat)} />
                <CardContent>

                </CardContent>
            </CardActionArea>
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