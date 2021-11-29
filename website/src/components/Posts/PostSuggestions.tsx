import React from "react"
import { Box, Toolbar } from "@mui/material"

// Components
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"

type Props = {
    prevSlug?: string
    prevTitle?: string
    nextSlug?: string
    nextTitle?: string
}

function PostSuggestions(props: Props) {
    const { prevSlug, prevTitle, nextSlug, nextTitle } = props
    let previous = <></>
    let next = <></>

    if (prevSlug && prevTitle) {
        previous = (
            <CustomLink to={prevSlug}>
                <Box sx={{ textAlign: "left" }}>
                    <Text variant="h6" color="textPrimary">
                        <b>Previous</b>
                    </Text>
                    <Text variant="subtitle1" color="primary">
                        {prevTitle}
                    </Text>
                </Box>
            </CustomLink>
        )
    }

    if (nextSlug && nextTitle) {
        next = (
            <CustomLink to={nextSlug}>
                <Box sx={{ textAlign: "right" }}>
                    <Text variant="h6" color="textPrimary">
                        <b>Next</b>
                    </Text>
                    <Text variant="subtitle1" color="primary">
                        {nextTitle}
                    </Text>
                </Box>
            </CustomLink>
        )
    }

    return (
        <Toolbar sx={{ margin: 1 }}>
            {previous}
            <Box sx={{ flexGrow: 1 }} />
            {next}
        </Toolbar>
    )
}

export default PostSuggestions
