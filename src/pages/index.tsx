import React from "react"
import { Grid, Container, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import config from "data/SiteConfig"

// Components
import RecentEpisodes from "components/Episode/RecentEpisodes"
import AboutSection from "components/About/AboutSection"
import ContactUsSection from "components/About/ContactUsSection"
import FeedSection from "components/Feeds/FeedSection"
import SEO from "components/General/SEO"

const styles = (theme: Theme) => createStyles({
    contact: {
        marginTop: theme.spacing(15),
    },
})

type Props = WithStyles<typeof styles>

export default withStyles(styles)((props: Props) => {
    const { classes } = props
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
})
