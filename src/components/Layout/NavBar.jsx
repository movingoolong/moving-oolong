import React, { useState } from "react"
import { Link } from "gatsby";
import { AppBar, Button, Drawer, Hidden, IconButton, Toolbar, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// Page Components
import Logo from "components/Logo/Logo"
import Search from "components/Search/Search";

const styles = theme => ({
    root: {
        flexGrow: 1,
        opacity: (props) => props.location.pathname === "/" ? 0.9 : 1.0,
    },
    title: {
        color: "#ffffff",
        fontSize: "24px",
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        display: 'inline-block',
        fontFamily: "Passion One, cursive",
        textTransform: "uppercase",
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
        color: theme.palette.primary.dark,
        //textTransform: 'lowercase',
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
    const { classes, location } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const links = (
        <>
            <Link className={classes.link} to="/">
                <Button className={classes.button}>
                    <b>Home</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/about">
                <Button className={classes.button}>
                    <b>About</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/episodes">
                <Button className={classes.button}>
                    <b>Episodes</b>
                </Button>
            </Link>
        </>
    );

    return (
        <AppBar 
            className={classes.root} 
            position={location.pathname === "/" ? "absolute" : "relative"} 
            elevation={0}
        >
            <Toolbar className={classes.toolbar}>
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
                    <Search />
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