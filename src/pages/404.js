import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import Layout from "components/Layout/Layout";
const styles = {
    root: {
        
    },
};

function EpisodePage(props) {
    return (
        <>
        <Layout>
            <h1>Oops page couldn't be found!</h1>
        </Layout>
        </>
    );
}

export default withStyles(styles)(EpisodePage)