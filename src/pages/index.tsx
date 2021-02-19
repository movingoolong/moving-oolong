import React from "react"
import { Grid, Container, makeStyles } from "@material-ui/core"

// Components
import RecentEpisodes from "components/Episode/RecentEpisodes"
import AboutSection from "components/About/AboutSection"
import ContactUsSection from "components/About/ContactUsSection"
import SEO from "components/General/SEO"

const useStyles = makeStyles((theme) => ({
    contact: {
        marginTop: theme.spacing(15),
    },
}))

export default () => {
    const classes = useStyles()
    return (
        <>
            <SEO
                title={"Home"}
                meta={[
                    {
                        property: "og:image",
                        content: `logos/logo-512.png`,
                    },
                ]}
            />
            <AboutSection />
            <RecentEpisodes />
            <Container maxWidth="xl">
                <Grid
                    className={classes.contact}
                    container
                    alignItems="stretch"
                    justify="center"
                >
                    <Grid item xs={12} sm={9}>
                        <ContactUsSection />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
