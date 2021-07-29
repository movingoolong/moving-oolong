import React, { useState } from "react"
import { Button, Grid, Container, makeStyles } from "@material-ui/core"
import { Facebook, Instagram, Email } from "@material-ui/icons"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated, config } from "react-spring"

// Components
import ContactUsForm from "@components/About/ContactUsForm"
import { AnimateOnVisible } from "@components/Layout"

const AnimatedGrid = animated(Grid)

const useStyles = makeStyles((theme) => ({
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
}))

export default () => {
    const classes = useStyles()
    const socialIcons = [
        <Button
            className={classes.button}
            href="mailto:movingoolong@gmail.com"
            color="secondary"
        >
            <Email />
            <p className={classes.text}>movingoolong@gmail.com</p>
        </Button>,
        <Button
            className={classes.button}
            href="https://www.facebook.com/movingoolong/"
            color="secondary"
        >
            <Facebook />
            <p className={classes.text}>Moving Oolong Podcast</p>
        </Button>,
        <Button
            className={classes.button}
            href="https://www.instagram.com/movingoolongpod/"
            color="secondary"
        >
            <Instagram />
            <p className={classes.text}>@movingoolongpod</p>
        </Button>,
    ]
    const [isVisible, setIsVisible] = useState(false)
    const trails = useTrail(socialIcons.length, {
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
        config: config.slow,
    })

    return (
        <Container maxWidth="lg">
            <AnimateOnVisible once>
                {(styles) => (
                    <animated.h1 className={classes.title} style={styles}>
                        Contact Us
                    </animated.h1>
                )}
            </AnimateOnVisible>

            <VisibilitySensor
                onChange={(isVisible) => setIsVisible(isVisible)}
                active={!isVisible}
                partialVisibility
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                >
                    {socialIcons.map((item, index) => (
                        <AnimatedGrid
                            item
                            xs={12}
                            sm={6}
                            lg={4}
                            style={trails[index]}
                            key={`contact-us-section-icon-${index}`}
                        >
                            {item}
                        </AnimatedGrid>
                    ))}
                    <Grid item xs={12}>
                        <ContactUsForm />
                    </Grid>
                </Grid>
            </VisibilitySensor>
        </Container>
    )
}
