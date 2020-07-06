import React from "react"
import { Card, CardContent, CardActions, withStyles } from "@material-ui/core"
import SocialIcons from "./SocialIcons"

// Components
import BioImage from "./BioImage"

const styles = (theme) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    content: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexShrink: 1,
    },
    title: {
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.palette.primary.dark,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    description: {
        color: theme.palette.secondary.main,
    },
    grow: {
        flexGrow: 1,
    },
    socials: {
        flexGrow: 1,
        marginLeft: "auto",
        marginRight: "auto",
    },
})

function Bio(props) {
    const {
        classes,
        name,
        imgsrc,
        description,
        instagram,
        twitter,
        allImages,
    } = props
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <BioImage allImages={allImages} imgSrc={imgsrc} />
                <CardContent>
                    {description != null ? (
                        <>
                            <h2 className={classes.title}>{name}</h2>
                            <div
                                className={classes.description}
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </CardContent>
            </div>
            <CardActions disableSpacing className={classes.socials}>
                <SocialIcons instagram={instagram} twitter={twitter} />
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(Bio)
