import { createMuiTheme } from "@material-ui/core/styles"
// @ts-ignore Importing a font so no type
import HussarBold from "assets/fonts/HussarBold.otf"

const hussarBold = {
    fontFamily: "Hussar Bold",
    fontStyle: "normal",
    src: `url(${HussarBold})`,
}

const hussar = ["Hussar Bold", "sans-serif"].join()
const poppins = ["Poppins", "san-serif"].join()

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
        fontFamily: hussar,
        body1: {
            fontFamily: poppins,
        },
        body2: {
            fontFamily: poppins,
        },
        button: {
            fontFamily: poppins,
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [hussarBold],
                h1: {
                    fontFamily: hussar,
                },
                h2: {
                    fontFamily: hussar,
                },
                h3: {
                    fontFamily: hussar,
                },
                h4: {
                    fontFamily: hussar,
                },
                h5: {
                    fontFamily: hussar,
                },
                h6: {
                    fontFamily: hussar,
                },
                p: {
                    fontFamily: poppins,
                },
            },
        },
    },
})

export default theme
