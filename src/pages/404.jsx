import React from "react"
import { Container, withStyles } from "@material-ui/core"

// Components
const styles = {
    root: {},
}

export default withStyles(styles)((props) => {
    return (
        <Container>
            <h1>Oops page couldn't be found!</h1>
        </Container>
    )
})
