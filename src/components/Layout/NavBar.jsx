import React from "react"
import { Link } from "gatsby";
import { AppBar, Button, IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";

// Page Components
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from "components/Logo/Logo"
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: "#ffffff",
        margin: theme.spacing(1),
        display: 'inline-block',
    },
    grow: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1),
        textDecoration: 'none',
        display: 'inline-block',
    },
    button: {
        textTransform: 'lowercase',
    }
});

function NavBar(props) {
    const { classes } = props;
    return (
        <AppBar className={classes.root} position="static" elevation="0">
            <Toolbar>
                <Link className={classes.link} to="/">
                    <Logo />
                    <h2 className={classes.title}>Moving Oolong</h2>
                </Link>


                <div className={classes.grow} />
                <Link className={classes.link} to="/">
                    <Button className={classes.button}>
                        Home
                    </Button>
                </Link>
                <Link className={classes.link} to="/about">
                    <Button className={classes.button}>
                        About
                    </Button>
                </Link>
                <Link className={classes.link} to="/episodes">
                    <Button className={classes.button}>
                        Episodes
                    </Button>
                </Link>
            </Toolbar>

        </AppBar>
    );
}

export default withStyles(styles)(NavBar);