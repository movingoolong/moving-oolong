import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "theme";

//Components
import NavBar from "./NavBar";

export default function Layout(props) {
    const {children} = props;
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                {children}
            </ThemeProvider>
        </>
    );
}