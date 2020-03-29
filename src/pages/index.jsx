import React from "react";
import { Grid, withStyles } from "@material-ui/core";

// Components
import RecentPosts from "components/Posts/RecentPosts";
import AboutSection from "components/About/AboutSection";
import ContactUsSection from "components/About/ContactUsSection";
import FeedSection from "components/Feeds/FeedSection";

const styles = {
    root: {

    }
};

export default withStyles(styles)((props) => {
    return (
        <>
            <AboutSection />
            <RecentPosts />
            <Grid container alignItems="stretch" justify="center">
                <Grid item xs={12} sm={9}>
                    <ContactUsSection />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FeedSection />
                </Grid>

            </Grid>

        </>
    );
})