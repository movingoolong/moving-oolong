import React from "react"
import { Container } from "@mui/material"

import Text from "@components/Typography"
// Components

export default function NotFoundPage() {
    return (
        <Container>
            <Text variant="h1" align="center">
                Oops page couldn't be found!
            </Text>
        </Container>
    )
}
