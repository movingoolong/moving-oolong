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
import { useTransition, animated } from "react-spring"

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

const AnimatedGrid = animated(Grid)

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

    // const transitions = useTransition(content, (item) => item.key, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     unique: true,
    // })

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid
                container
                spacing={3}
                alignItems="stretch"
                alignContent="stretch"
                justify="center"
            >
                {/* {transitions.map(({ item, key, props }) => (
                    <AnimatedGrid
                        item
                        className={classes.item}
                        xs={xs}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        key={key}
                        style={props}
                    >
                        {item.node}
                    </AnimatedGrid>
                ))} */}
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
