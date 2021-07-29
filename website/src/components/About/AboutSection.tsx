import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Container, Grid, makeStyles } from "@material-ui/core"
import { useSpring, animated, config } from "react-spring"

// Components
import CustomLink from "@components/General/CustomLink"
import { AnimatedText } from "@components/Typography"

import useBoop from "@hooks/useBoop"

const AnimatedGrid = animated(Grid)
const AnimatedButton = animated(Button)

const HEIGHT = "70vh"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: HEIGHT,
    },
    imageWrapper: {
        width: "100%",
        height: HEIGHT,
        zIndex: -10,
        position: "fixed",
    },
    image: {
        backgroundAttachment: "fixed",
        zIndex: -10,
    },
    filter: {
        width: "100%",
        height: HEIGHT,
        position: "absolute",
        top: 0,
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: -1,
    },
    container: {
        zIndex: 100,
        position: "absolute",
        top: 0,
        width: "100%",
        height: HEIGHT,
        margin: "auto",
    },
    button: {
        margin: theme.spacing(3),
        opacity: 0.9,
    },
    description: {
        textAlign: "center",
        color: "#ffffff",
        margin: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(1),
        },
    },
}))

function AboutSection() {
    const classes = useStyles()

    const springLeft = useSpring({
        from: { opacity: 0, transform: "translateX(-10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        config: config.molasses,
    })
    const springRight = useSpring({
        from: { opacity: 0, transform: "translateX(10px)" },
        to: { opacity: 1, transform: "translateX(0px)" },
        config: config.molasses,
    })

    const [buttonBoopStyle, trigger] = useBoop({ scale: 1.05 })

    return (
        <div className={classes.root}>
            <StaticImage
                src="../../assets/img/about3.jpg"
                alt="Homepage image featuring Linda, Ming, and Sally smiling against a granite wall background"
                layout="fullWidth"
                quality={100}
                className={classes.imageWrapper}
                imgClassName={classes.image}
                loading="eager"
                objectFit="cover"
                objectPosition="center 50%"
                formats={["webp"]}
            />
            <div className={classes.filter}>{""}</div>
            <Grid
                container
                className={classes.container}
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <AnimatedGrid item style={springLeft}>
                    <Container maxWidth="md">
                        <AnimatedText
                            variant="h5"
                            className={classes.description}
                            style={springLeft}
                        >
                           Nice
                        </AnimatedText>
                    </Container>
                </AnimatedGrid>

                <AnimatedGrid item style={springRight}>
                    <CustomLink to="/about">
                        <AnimatedButton
                            className={classes.button}
                            size="large"
                            variant="contained"
                            style={buttonBoopStyle}
                            onMouseEnter={trigger}
                        >
                            About Us
                        </AnimatedButton>
                    </CustomLink>
                </AnimatedGrid>
            </Grid>
        </div>
    )
}

export default AboutSection
