import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
    const { children } = props;
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Passion+One&display=swap" rel="stylesheet"/>
            </Helmet>
            <CssBaseline />
            <NavBar />
            {children}
            <Footer />
        </>
    );
}