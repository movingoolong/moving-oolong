import React from "react"
import { Container, Grid, GridProps, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}))

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

type Props = PropsForGrid & {
    content: ReactNodeWithKey[]
}

function ContentGrid(props: Props) {
    const { content, xs = 12, sm = 4, md = false, lg = 3, xl = false } = props
    const classes = useStyles()

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

export default ContentGrid
