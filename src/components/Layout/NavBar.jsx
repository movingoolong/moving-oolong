import React from "react"
import { Link } from "gatsby";
import { AppBar, IconButton, Toolbar, withStyles } from "@material-ui/core";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
//import { FacebookIcon, InstagramIcon } from '@material-ui/icons';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function NavBar(props) {
    const { classes } = props;
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <IconButton href="https://www.facebook.com/movingoolong/">
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/movingoolongpod/">
                    <InstagramIcon />
                </IconButton>
            </Toolbar>

        </AppBar>
    );
}

export default withStyles(styles)(NavBar);