import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
    Container,
    Grid,
    IconButton,
    withStyles,
    Theme,
    createStyles,
    WithStyles,
} from "@material-ui/core"
// @ts-ignore
import SwipeableViews from "react-swipeable-views"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

// Components
import { EpisodeArrayType } from "hooks/useEpisodes"
import EpisodePreview from "./EpisodePreview"

const styles = (theme: Theme) =>
    createStyles({
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
    })

type Props = WithStyles<typeof styles> & {
    episodes: EpisodeArrayType
    numShown?: number
}

function SwipeableEpisodes(props: Props) {
    const { classes, episodes, numShown = 4 } = props
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
                    sm={3}
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
                    <IconButton
                        className={classes.iconLeft}
                        aria-label="back button"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
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
                    <IconButton
                        className={classes.iconRight}
                        aria-label="forward button"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(SwipeableEpisodes)
