import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import Layout from "components/Layout/Layout";
import EpisodePageContent from "components/Posts/EpisodePageContent";
const styles = {
    root: {
        
    }
};

function EpisodePage(props) {
    return (
        <>
        <Layout>
            <EpisodePageContent />
        </Layout>
        </>
    );
}

export default withStyles(styles)(EpisodePage)