import { createTheme, responsiveFontSizes } from "@mui/material"
// @ts-ignore Importing a font so no type
import SukarBlack from "./assets/fonts/Sukar-Black.ttf"

const fontFace = {
    fontFamily: "Sukar Black",
    fontStyle: "normal",
    src: `url(${SukarBlack})`,
}

export const HEADING_FONT = ["Sukar Black", "sans-serif"].join()
export const BODY_FONT = ["Poppins", "san-serif"].join()

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#3C787E",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#C1666B",
        },
        text: {
            primary: "#545454",
        },
    },
    typography: {
        fontFamily: HEADING_FONT,
        h1: {
            fontSize: "2.5em",
            fontFamily: HEADING_FONT,
        },
        h2: {
            fontSize: "2.15em",
            fontFamily: HEADING_FONT,
        },
        h3: {
            fontSize: "2em",
            fontFamily: HEADING_FONT,
        },
        h4: {
            fontSize: "1.75em",
            fontFamily: HEADING_FONT,
        },
        h5: {
            fontSize: "1.6em",
            fontFamily: HEADING_FONT,
        },
        h6: {
            fontSize: "1.45em",
            fontFamily: HEADING_FONT,
        },
        body1: {
            fontFamily: BODY_FONT,
        },
        body2: {
            fontFamily: BODY_FONT,
        },
        subtitle1: {
            fontFamily: BODY_FONT,
        },
        subtitle2: {
            fontFamily: BODY_FONT,
        },
        button: {
            fontFamily: BODY_FONT,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@global": {
                    "@font-face": [fontFace],
                },
            }
        }
    },
})

export default responsiveFontSizes(theme)
