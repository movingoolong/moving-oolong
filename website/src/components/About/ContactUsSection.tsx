import React, { useState } from "react"
import { Button, Grid, Container, styled } from "@mui/material"
import { Facebook, Instagram, Email } from "@mui/icons-material"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated, config } from "react-spring"

// Components
import ContactUsForm from "@components/About/ContactUsForm"
import { AnimateOnVisible } from "@components/Layout"

const AnimatedGrid = animated(Grid)
const AnimatedHeader = animated(
    styled("h1")(({ theme }) => ({
        textAlign: "center",
        color: theme.palette.primary.main,
    }))
)
const StyledParagraph = styled("p")(({ theme }) => ({
    textTransform: "none",
    marginLeft: theme.spacing(1),
}))
const StyledButton = styled(Button)(({ theme }) => ({
    width: "100%",
}))

export default () => {
    const socialIcons = [
        <StyledButton href="mailto:movingoolong@gmail.com" color="secondary">
            <Email />
            <StyledParagraph>movingoolong@gmail.com</StyledParagraph>
        </StyledButton>,
        <StyledButton
            href="https://www.facebook.com/movingoolong/"
            color="secondary"
        >
            <Facebook />
            <StyledParagraph>Moving Oolong Podcast</StyledParagraph>
        </StyledButton>,
        <StyledButton
            href="https://www.instagram.com/movingoolongpod/"
            color="secondary"
        >
            <Instagram />
            <StyledParagraph>@movingoolongpod</StyledParagraph>
        </StyledButton>,
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
                    <AnimatedHeader style={styles}>
                        Contact Us
                    </AnimatedHeader>
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
