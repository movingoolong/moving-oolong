import React from "react";
import { withStyles } from "@material-ui/core/styles";

// Components
import EpisodePageContent from "components/EpisodePage/EpisodePageContent";
const styles = {
    root: {

    }
};

function EpisodePage(props) {
    return (
        <>
            <EpisodePageContent />
        </>
    );
}

export default withStyles(styles)(EpisodePage)