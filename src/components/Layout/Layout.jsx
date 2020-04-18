import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';
import config from "data/SiteConfig";

//Components
import NavBar from "./NavBar";
import Footer from "./Footer";

const NotCapitalizedWords = [
    "the",
    "a",
    "or",
];

export default function Layout(props) {
    const { children, location } = props;
    let locationString = location.pathname;
    if (locationString == "/") {
        // Just Home
        locationString = "Home"
    } else if (locationString.charAt(locationString.length - 1) == "/") {
        // Remove beginning and trailing /
        locationString = locationString.substring(1, locationString.length - 1);
    } else {
        // Just remove begining /
        locationString = locationString.substring(1);
    }

    // Go through and capitalize the first letter of each word if it's not in NotCapitalizedWords
    const titleArray = locationString.split("-").map(word =>
        (word.length > 1 && NotCapitalizedWords.indexOf(word) == -1) ?
            word.charAt(0).toUpperCase() + word.substring(1)
            : word);
    // This title is used as a fall-back if no helmet element provided 

    return (
        <>
            <Helmet title={`${titleArray.join(" ")} | Moving Oolong`} defer={false}>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Passion+One&display=swap" rel="stylesheet" />
            </Helmet>
            <CssBaseline />
            <NavBar location={location} />
            {children}
            <Footer />
        </>
    );
}