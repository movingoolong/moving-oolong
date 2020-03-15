import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import Layout from "components/Layout/Layout";
import FeaturedPosts from "components/Posts/FeaturedPosts";
import AboutSection from "components/About/AboutSection";

const styles = {
    root: {

    }
};

function HomePage(props) {
    return (
        <>
        <Layout>
            <FeaturedPosts />
            <AboutSection />
        </Layout>
        </>
    );
}

export default withStyles(styles)(HomePage)