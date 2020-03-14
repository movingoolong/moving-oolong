import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "theme";

//Components
import NavBar from "./NavBar";

export default function Layout(props) {
    const { children } = props;
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                {children}
            </ThemeProvider>
        </>
    );
}