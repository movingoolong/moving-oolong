import React, { useState } from "react"
import { PageProps } from "gatsby"
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    styled,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

// Components
import Logo from "@components/Logo/Logo"
import CustomLink from "@components/General/CustomLink"
import Text from "@components/Typography"
import Button from "@components/Button"

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
        color: theme.palette.primary.main,
    },
}))

type Props = {
    location: PageProps["location"]
}

function Header({ location }: Props) {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const links = (
        <>
            <StyledButton to="/">
                <b>Home</b>
            </StyledButton>

            <StyledButton to="/about">
                <b>About</b>
            </StyledButton>

            <StyledButton to="/episodes">
                <b>Episodes</b>
            </StyledButton>

            <StyledButton href="https://movingoolong.medium.com/">
                <b>Blog</b>
            </StyledButton>

            <StyledButton href="https://anchor.fm/movingoolongpod/support">
                <b>Support Us</b>
            </StyledButton>
        </>
    )

    return (
        <AppBar
            //position={location.pathname === "/" ? "absolute" : "relative"}
            key={location.pathname}
            elevation={0}
            color="primary"
            sx={{
                flexGrow: 1,
            }}
        >
            <Toolbar>
                <CustomLink to="/">
                    <Logo />
                    <Text
                        variant="h2"
                        sx={{
                            color: "primary.contrastText",
                            marginLeft: 1, // theme.spacing(1),
                            display: "inline",
                            textTransform: "none",
                            verticalAlign: "-15%",
                        }}
                    >
                        Moving Oolong
                    </Text>
                </CustomLink>

                <Box
                    sx={{
                        flexGrow: 1,
                    }}
                />

                <Box
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                    }}
                >
                    {links}
                </Box>

                <Box
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none",
                        },
                    }}
                >
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            marginRight: {
                                sm: 1, // theme.spacing(2),
                                md: 2,
                            },
                            color: "primary.contrastText",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        PaperProps={{
                            sx: {
                                paddingTop: 1, // theme.spacing(1),
                                width: "40%",
                            },
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
