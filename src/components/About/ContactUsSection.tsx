import React from "react"
import {
    Button,
    Grid,
    Container,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import EmailIcon from "@material-ui/icons/Email"
// Components
import ContactUsForm from "components/About/ContactUsForm"

const styles = (theme: Theme) =>
    createStyles({
        title: {
            textAlign: "center",
            color: theme.palette.primary.main,
        },
        moving: {
            textAlign: "center",
        },
        button: {
            width: "100%",
        },
        text: {
            textTransform: "none",
            marginLeft: theme.spacing(1),
        },
    })

type Props = WithStyles<typeof styles>

export default withStyles(styles)((props: Props) => {
    const { classes } = props

    return (
        <Container maxWidth="lg">
            <h1 className={classes.title}>Contact Us</h1>
            <Grid
                container
                alignItems="center"
                justify="center"
                alignContent="center"
            >
                <Grid item xs={12} sm={6} lg={3}>
                    <Button
                        className={classes.button}
                        href="mailto:movingoolong@gmail.com"
                        color="secondary"
                    >
                        <EmailIcon />
                        <p className={classes.text}>movingoolong@gmail.com</p>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Button
                        className={classes.button}
                        href="https://www.facebook.com/movingoolong/"
                        color="secondary"
                    >
                        <FacebookIcon />
                        <p className={classes.text}>Moving Oolong Podcast</p>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Button
                        className={classes.button}
                        href="https://www.instagram.com/movingoolongpod/"
                        color="secondary"
                    >
                        <InstagramIcon />
                        <p className={classes.text}>@movingoolongpod</p>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Button
                        className={classes.button}
                        href="https://www.instagram.com/movingoolongpod/"
                        color="secondary"
                    >
                        <TwitterIcon />
                        <p className={classes.text}>@movingoolongpod</p>
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <ContactUsForm />
                </Grid>
            </Grid>
        </Container>
    )
})