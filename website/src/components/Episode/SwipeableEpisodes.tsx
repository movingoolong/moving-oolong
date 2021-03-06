import React, { useState } from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

// @ts-ignore SwipeableViews doesn't have type
import SwipeableViews from "react-swipeable-views"

// Components
import { EpisodeArrayType } from "@hooks/useEpisodes"
import EpisodePreview from "./EpisodePreview"
import { IconBoopButton } from "@components/Button"

import useBoop from "@hooks/useBoop"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        height: "100%",
        width: "100%",
    },
    iconLeft: {
        marginRight: "auto",
    },
    iconRight: {
        marginLeft: "auto",
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}))

type Props = {
    episodes: EpisodeArrayType
    numShown: 1 | 2 | 3 | 4
}

function SwipeableEpisodes({ episodes, numShown = 4 }: Props) {
    const classes = useStyles()
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
                    className={classes.item}
                    // @ts-ignore Numbers
                    sm={12 / numShown}
                    key={episode.node.id}
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
                justify="center"
                key={step}
            >
                {previews}
            </Grid>
        )
    }

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <IconBoopButton
                        className={classes.iconLeft}
                        aria-label="back button"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        boopProps={{ x: -3 }}
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
                        className={classes.iconRight}
                        aria-label="forward button"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        boopProps={{ x: 3 }}
                    >
                        <ArrowForwardIosIcon />
                    </IconBoopButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SwipeableEpisodes
