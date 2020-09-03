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

// Components
import Text from "components/Typography/Text"
import ClientOnly from "components/General/ClientOnly"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
            [theme.breakpoints.up("md")]: {
                paddingRight: theme.spacing(3),
            },
        },
        copyright: {
            marginLeft: theme.spacing(3),
        },
    })

type Props = WithStyles<typeof styles>

function Footer(props: Props) {
    const { classes } = props
    return (
        <ClientOnly>
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
                <Grid item className={classes.copyright}>
                    <Text align="right" color="primary">
                        <b>{config.copyright}</b>
                    </Text>
                </Grid>
            </Grid>
        </ClientOnly>
    )
}

export default withStyles(styles)(Footer)
