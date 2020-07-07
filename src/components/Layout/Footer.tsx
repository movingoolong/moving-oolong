import React from "react"
import {
    Grid,
    IconButton,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import config from "data/SiteConfig"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"

// Components

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.up("md")]: {
            paddingRight: theme.spacing(3),
        },
    },
    copyright: {
        marginLeft: theme.spacing(3),
        color: theme.palette.primary.main,
        textAlign: "right",
    },
})

type Props = WithStyles<typeof styles>

function Footer(props: Props) {
    const { classes } = props
    return (
        <Grid
            container
            alignItems="center"
            wrap="nowrap"
            justify="flex-end"
            className={classes.root}
        >
            <Grid item>
                <IconButton
                    href="https://www.facebook.com/movingoolong/"
                    color="primary"
                >
                    <FacebookIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    href="https://www.instagram.com/movingoolongpod/"
                    color="primary"
                >
                    <InstagramIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton
                    href="https://www.instagram.com/movingoolongpod/"
                    color="primary"
                >
                    <TwitterIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <h4 className={classes.copyright}>{config.copyright}</h4>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Footer)
