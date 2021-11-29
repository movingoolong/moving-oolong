import React, { useState } from "react"
import { Container, Grid } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

// @ts-ignore SwipeableViews doesn't have type
import SwipeableViews from "react-swipeable-views"

// Components
import EpisodePreview from "./EpisodePreview"
import { IconBoopButton } from "@components/Button"

type Props = {
    episodes: GatsbyTypes.EpisodeFragment[]
    numShown: 1 | 2 | 3 | 4
}

function SwipeableEpisodes({ episodes, numShown = 4 }: Props) {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStepChange = (step: number) => {
        setActiveStep(step)
    }

    const maxSteps = Math.ceil(episodes.length / numShown)
    const steps: React.ReactElement[] = []

    for (let step = 0; step < maxSteps; step++) {
        const previews = []
        const start = step * numShown
        for (let i = start; i < start + numShown && i < episodes.length; i++) {
            const episode = episodes[i]
            previews.push(
                <Grid
                    item
                    // @ts-ignore Numbers
                    sm={12 / numShown}
                    key={episode._id}
                    sx={{
                        marginTop: 2,
                        marginBottom: 2,
                    }}
                >
                    <EpisodePreview episode={episode} showDescription={false} />
                </Grid>
            )
        }
        steps.push(
            <Grid
                container
                spacing={3}
                alignItems="stretch"
                justifyContent="center"
                key={step}
            >
                {previews}
            </Grid>
        )
    }

    return (
        <Container maxWidth="xl" sx={{
            marginBottom: 2, // theme.spacing(2),
            height: "100%",
            width: "100%",
        }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <IconBoopButton
                        aria-label="back button"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        boopProps={{ x: -3 }}
                        sx={{
                            marginRight: "auto",
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconBoopButton>
                </Grid>
                <Grid item sm={10} lg={11}>
                    <SwipeableViews
                        enableMouseEvents
                        slideStyle={{ overflow: "hidden" }}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                    >
                        {steps}
                    </SwipeableViews>
                </Grid>
                <Grid item>
                    <IconBoopButton
                        aria-label="forward button"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        boopProps={{ x: 3 }}
                        sx={{ marginLeft: "auto "}}
                    >
                        <ArrowForwardIosIcon />
                    </IconBoopButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SwipeableEpisodes
