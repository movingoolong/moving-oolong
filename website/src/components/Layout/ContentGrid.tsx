import React from "react"
import { Container, Grid, GridProps } from "@mui/material"

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
    const { content, xs = 12, sm = 6, md = 4, lg = false, xl = 3 } = props

    return (
        <Container maxWidth="xl" sx={{ marginBottom: 2 }}>
            <Grid
                container
                spacing={3}
                alignItems="stretch"
                alignContent="stretch"
                justifyContent="center"
            >
                {content.map((item) => (
                    <Grid
                        item
                        xs={xs}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        key={item.key}
                        sx={{
                            marginTop: 2,
                            marginBottom: 2,
                        }}
                    >
                        {item.node}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ContentGrid
