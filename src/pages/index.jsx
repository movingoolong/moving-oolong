import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import RecentPosts from "components/Posts/RecentPosts";
import AboutSection from "components/About/AboutSection";
//import TwitterFeed from "components/Feeds/TwitterFeed";

const styles = {
    root: {

    }
};

export default withStyles(styles)((props) => {
  return (
    <>

        <RecentPosts />
        <AboutSection />
        {/* <TwitterFeed /> */}
    </>
);
})