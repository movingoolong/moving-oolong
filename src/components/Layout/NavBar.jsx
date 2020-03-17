import React, { useState } from "react"
import { Link } from "gatsby";
import { AppBar, Button, Drawer, Hidden, IconButton, Toolbar, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// Page Components
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
    },
    menuButton: {
        //color: "#ffffff",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        width: "40%",
    },
});

function NavBar(props) {
    const { classes } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const links = (
        <>
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
        </>
    );

    return (
        <AppBar className={classes.root} position="static" elevation="0">
            <Toolbar>
                <Link className={classes.link} to="/">
                    <Logo />
                    <h2 className={classes.title}>Moving Oolong</h2>
                </Link>

                <div className={classes.grow} />
                <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                <Hidden xsDown>
                    {links}
                </Hidden>

                <Hidden smUp>
                    <Drawer
                        variant="temporary"
                        classes={{
                            paper: classes.drawer,
                        }}
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {links}
                    </Drawer>
                </Hidden>

            </Toolbar>

        </AppBar>
    );
}

export default withStyles(styles)(NavBar);