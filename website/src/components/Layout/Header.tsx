import React, { useState } from "react"
import { PageProps } from "gatsby"
import {
    AppBar,
    Drawer,
    Hidden,
    IconButton,
    Toolbar,
    makeStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

// Components
import Logo from "@components/Logo/Logo"
import Search from "@components/Search/AutocompleteSearch"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"
import Button from "@components/Button"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        opacity: 0.9,
    },
    title: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(1),
        display: "inline",
        textTransform: "none",
        verticalAlign: "-15%",
    },
    grow: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1),
        textDecoration: "none",
        display: "inline-block",
    },
    button: {
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down("xs")]: {
            color: theme.palette.primary.main,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    },
    drawer: {
        paddingTop: theme.spacing(1),
        width: "40%",
    },
}))

type Props = {
    location: PageProps["location"]
}

function Header({ location }: Props) {
    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const links = (
        <>
            <Button className={classes.button} to="/">
                <b>Home</b>
            </Button>

            <Button className={classes.button} to="/about">
                <b>About</b>
            </Button>

            <Button className={classes.button} to="/episodes">
                <b>Episodes</b>
            </Button>

            <Button
                className={classes.button}
                href="https://movingoolong.medium.com/"
            >
                <b>Blog</b>
            </Button>

            <Button
                className={classes.button}
                href="https://anchor.fm/movingoolongpod/support "
            >
                <b>Support Us</b>
            </Button>
        </>
    )

    return (
        <AppBar
            className={classes.root}
            position={location.pathname === "/" ? "absolute" : "relative"}
            key={location.pathname}
            elevation={0}
        >
            <Toolbar>
                <CustomLink to="/">
                    <Logo />
                    <Text variant="h2" className={classes.title}>
                        Moving Oolong
                    </Text>
                </CustomLink>

                <div className={classes.grow} />

                <Hidden smDown>
                    <Search />
                </Hidden>

                <Hidden xsDown>{links}</Hidden>

                <Hidden smUp>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
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
    )
}

export default Header
