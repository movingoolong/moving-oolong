import React from "react"
import { Grid } from "@material-ui/core"

// Components
import TwitterFeed from "components/Feeds/TwitterFeed"

type Props = {}

function FeedSection(props: Props) {
    return (
        <>
            <Grid
                container
                alignItems="center"
                justify="center"
                alignContent="center"
            >
                <Grid item xs={12}>
                    <TwitterFeed height={600} />
                </Grid>
            </Grid>
        </>
    )
}

export default FeedSection
