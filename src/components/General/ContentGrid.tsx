import React from "react"
import {
    Container,
    Grid,
    GridProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
        },
        item: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

export interface PropsForGrid {
    xs?: GridProps["xs"]
    sm?: GridProps["sm"]
    md?: GridProps["md"]
    lg?: GridProps["lg"]
    xl?: GridProps["xl"]
}

type Props = WithStyles<typeof styles> &
    PropsForGrid & {
        content: React.ReactNode[]
    }

function ContentGrid(props: Props) {
    const {
        classes,
        content,
        xs = 12,
        sm = 4,
        md = false,
        lg = 3,
        xl = false,
    } = props

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid
                container
                spacing={3}
                alignItems="stretch"
                alignContent="stretch"
                justify="center"
            >
                {content.map((node, index) => (
                    <Grid
                        item
                        className={classes.item}
                        xs={xs}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        key={index}
                    >
                        {node}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(ContentGrid)
