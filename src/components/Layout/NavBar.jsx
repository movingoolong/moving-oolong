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
    grow: {
        flexGrow: 1
    },
    link: {
        display: 'block',
        margin: theme.spacing(1),
        textDecoration: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'block',
        // },
    },
    button: {
        textTransform: 'lowercase',
    }
});

function NavBar(props) {
    const { classes } = props;
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Logo />
                <IconButton href="https://www.facebook.com/movingoolong/">
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/movingoolongpod/">
                    <InstagramIcon />
                </IconButton>
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