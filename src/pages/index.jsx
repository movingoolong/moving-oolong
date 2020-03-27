import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import RecentPosts from "components/Posts/RecentPosts";
import AboutSection from "components/About/AboutSection";
import FeedSection from "components/Feeds/FeedSection";

const styles = {
    root: {

    }
};

export default withStyles(styles)((props) => {
  return (
    <>
        <RecentPosts />
        <AboutSection />
        <FeedSection />
    </>
);
})