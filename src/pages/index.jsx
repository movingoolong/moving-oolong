import React from "react"
import { Helmet } from "react-helmet"
import { Grid, Container, withStyles } from "@material-ui/core"
import config from "data/SiteConfig"

// Components
import RecentEpisodes from "components/Episode/RecentEpisodes"
import AboutSection from "components/About/AboutSection"
import ContactUsSection from "components/About/ContactUsSection"
import FeedSection from "components/Feeds/FeedSection"

const styles = (theme) => ({
    contact: {
        marginTop: theme.spacing(15),
    },
})

export default withStyles(styles)((props) => {
    const { classes } = props
    const title = "Home | Moving Oolong"
    return (
        <>
            <Helmet title={title}>
                <meta
                    name="description"
                    content={config.siteDescriptionShort}
                />
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={config.siteDescriptionShort}
                />
                <meta
                    property="og:image"
                    content={`${config.siteUrl}/logos/logo-512.png`}
                />
                <meta property="og:type" content="website" />
            </Helmet>
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

                    <Grid item xs={12} sm={2}>
                        <FeedSection />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
})
