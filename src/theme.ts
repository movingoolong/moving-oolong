import { createMuiTheme } from "@material-ui/core/styles"
// @ts-ignore Importing a font so no type
import HussarBold from "assets/fonts/HussarBold.otf"

const hussarBold = {
    fontFamily: "Hussar Bold",
    fontStyle: "normal",
    src: `url(${HussarBold})`,
}

export const HEADING_FONT = ["Hussar Bold", "sans-serif"].join()
export const BODY_FONT = ["Poppins", "san-serif"].join()

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#a9ddde",
            contrastText: "#26547C",
        },
        secondary: {
            main: "#989C94",
        },
    },
    typography: {
        fontFamily: HEADING_FONT,
        body1: {
            fontFamily: BODY_FONT,
        },
        body2: {
            fontFamily: BODY_FONT,
        },
        button: {
            fontFamily: BODY_FONT,
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [hussarBold],
                h1: {
                    fontFamily: HEADING_FONT,
                },
                h2: {
                    fontFamily: HEADING_FONT,
                },
                h3: {
                    fontFamily: HEADING_FONT,
                },
                h4: {
                    fontFamily: HEADING_FONT,
                },
                h5: {
                    fontFamily: HEADING_FONT,
                },
                h6: {
                    fontFamily: HEADING_FONT,
                },
                p: {
                    fontFamily: BODY_FONT,
                },
            },
        },
    },
})

export default theme
