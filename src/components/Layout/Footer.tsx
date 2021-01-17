import React from "react"
import {
    Grid,
    Theme,
    SvgIcon,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import config from "data/SiteConfig"
import { Facebook, Instagram, YouTube } from "@material-ui/icons"

// Components
import Text from "components/Typography/Text"
import ClientOnly from "components/General/ClientOnly"
import TooltipIcon from "components/General/TooltipIcon"

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
                    <TooltipIcon
                        title="Facebook - Moving Oolong"
                        href="https://www.facebook.com/movingoolong/"
                        color="primary"
                    >
                        <Facebook />
                    </TooltipIcon>
                </Grid>
                <Grid item>
                    <TooltipIcon
                        title="Instagram - @movingoolongpod"
                        href="https://www.instagram.com/movingoolongpod/"
                        color="primary"
                    >
                        <Instagram />
                    </TooltipIcon>
                </Grid>
                <Grid item>
                    <TooltipIcon
                        title="YouTube - Moving Oolong Podcast"
                        href="https://www.youtube.com/channel/UC9xlBpPaMGQEe_3VvLybO9A/featured"
                        color="primary"
                    >
                        <YouTube />
                    </TooltipIcon>
                </Grid>
                <Grid item>
                    <TooltipIcon
                        title="Medium - @movingoolong"
                        href="https://medium.com/@movingoolong"
                        color="primary"
                    >
                        <SvgIcon viewBox="0 0 30 30">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M22.542,21h-5.931 v-0.333L18,19.445V12.47L14.589,21h-0.533l-3.806-8.597v6.087l1.74,2.177V21H7.458v-0.333l1.799-2.177v-7.242L7.658,9.249 c0,0,0-0.289,0-0.244h4.376l3.399,7.353l2.932-7.353h4.154v0.244L21,10.526v8.919l1.542,1.222V21z" />
                        </SvgIcon>
                    </TooltipIcon>
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
