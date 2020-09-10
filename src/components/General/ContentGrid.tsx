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

export interface ReactNodeWithKey {
    node: React.ReactNode
    key: string | number
}

type Props = WithStyles<typeof styles> &
    PropsForGrid & {
        content: ReactNodeWithKey[]
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
                {content.map((item) => (
                    <Grid
                        item
                        className={classes.item}
                        xs={xs}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        key={item.key}
                    >
                        {item.node}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(ContentGrid)
