import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import Layout from "components/Layout/Layout";
import AllPosts from "components/Posts/AllPosts";

const styles = {
    root: {

    }
};

function HomePage(props) {
    return (
        <>
        <Layout>
            <AllPosts />
        </Layout>
        </>
    );
}

export default withStyles(styles)(HomePage)