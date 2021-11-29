import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Button, Container, Grid, makeStyles } from "@mui/material"
import { useSpring, animated, config } from "react-spring"

// Components
import CustomLink from "@components/General/CustomLink"
import { AnimatedText } from "@components/Typography"

import useBoop from "@hooks/useBoop"

const AnimatedGrid = animated(Grid)
const AnimatedButton = animated(Button)

const HEIGHT = "70vh"

function AboutSection() {
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
        <Box
            sx={{
                width: "100%",
                height: HEIGHT,
            }}
        >
            <StaticImage
                src="../../assets/img/about3.jpg"
                alt="Homepage image featuring Linda, Ming, and Sally smiling against a granite wall background"
                layout="fullWidth"
                quality={100}
                loading="eager"
                objectFit="cover"
                objectPosition="center 50%"
                formats={["webp"]}
                style={{
                    width: "100%",
                    height: HEIGHT,
                    zIndex: -10,
                    position: "fixed",
                }}
                imgStyle={{
                    backgroundAttachment: "fixed",
                    zIndex: -10,
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    height: HEIGHT,
                    position: "absolute",
                    top: 0,
                    background: "rgba(0, 0, 0, 0.4)",
                    zIndex: -1,
                }}
            >
                {""}
            </Box>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{
                    zIndex: 100,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: HEIGHT,
                    margin: "auto",
                }}
            >
                <AnimatedGrid item style={springLeft}>
                    <Container maxWidth="md">
                        <AnimatedText
                            variant="h5"
                            style={springLeft}
                            sx={{
                                textAlign: "center",
                                color: "#ffffff",
                                margin: {
                                    xs: 1, // theme.spacing(1)
                                    sm: 3, // theme.spacing(3)
                                },
                            }}
                        >
                            Nice
                        </AnimatedText>
                    </Container>
                </AnimatedGrid>

                <AnimatedGrid item style={springRight}>
                    <CustomLink to="/about">
                        <AnimatedButton
                            size="large"
                            variant="contained"
                            style={buttonBoopStyle}
                            onMouseEnter={trigger}
                            sx={{
                                margin: 3, // theme.spacing(3)
                                opacity: 0.9,
                            }}
                        >
                            About Us
                        </AnimatedButton>
                    </CustomLink>
                </AnimatedGrid>
            </Grid>
        </Box>
    )
}

export default AboutSection
