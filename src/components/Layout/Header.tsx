import React, { useState } from "react"
import { PageProps } from "gatsby"
import {
    AppBar,
    Button,
    Drawer,
    Hidden,
    IconButton,
    Toolbar,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

// Components
import Logo from "components/Logo/Logo"
import Search from "components/Search/Search"
import CustomLink from "components/General/CustomLink"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            opacity: 0.9,
        },
        title: {
            color: "#ffffff",
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2),
            display: "inline",
            textTransform: "uppercase",
            fontSize: "24px",
            verticalAlign: "-15%",
            [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
            },
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
            color: theme.palette.primary.dark,
            //textTransform: 'lowercase',
        },
        menuButton: {
            //color: "#ffffff",
            marginRight: theme.spacing(2),
        },
        drawer: {
            width: "40%",
        },
    })

type Props = {
    location: PageProps["location"]
}

function Header(props: Props & WithStyles<typeof styles>) {
    const { classes, location } = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const links = (
        <>
            <CustomLink className={classes.link} to="/">
                <Button className={classes.button}>
                    <b>Home</b>
                </Button>
            </CustomLink>
            <CustomLink className={classes.link} to="/about">
                <Button className={classes.button}>
                    <b>About</b>
                </Button>
            </CustomLink>
            <CustomLink className={classes.link} to="/episodes">
                <Button className={classes.button}>
                    <b>Episodes</b>
                </Button>
            </CustomLink>
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
                <CustomLink className={classes.link} to="/">
                    <Logo />
                    <h2 className={classes.title}>Moving Oolong</h2>
                </CustomLink>

                <div className={classes.grow} />

                <Hidden xsDown>
                    <Search />
                    {links}
                </Hidden>

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

export default withStyles(styles)(Header)
