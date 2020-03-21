import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import Layout from "components/Layout/Layout";
import RecentPosts from "components/Posts/RecentPosts";
import AboutSection from "components/About/AboutSection";

const styles = {
    root: {

    }
};

function HomePage(props) {
    return (
        <>
        <Layout>
            <RecentPosts />
            <AboutSection />
        </Layout>
        </>
    );
}

export default withStyles(styles)(HomePage)