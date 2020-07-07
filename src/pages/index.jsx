import React from "react"
import { Grid, Container, withStyles } from "@material-ui/core"
import config from "data/SiteConfig"

// Components
import RecentEpisodes from "components/Episode/RecentEpisodes"
import AboutSection from "components/About/AboutSection"
import ContactUsSection from "components/About/ContactUsSection"
import FeedSection from "components/Feeds/FeedSection"
import SEO from "components/General/SEO"

const styles = (theme) => ({
    contact: {
        marginTop: theme.spacing(15),
    },
})

export default withStyles(styles)((props) => {
    const { classes } = props
    return (
        <>
            <SEO
                title={"Home"}
                meta={[
                    {
                        property: "og:image",
                        content: `${config.siteUrl}/logos/logo-512.png`,
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

                    <Grid item xs={12} sm={2}>
                        <FeedSection />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
})
