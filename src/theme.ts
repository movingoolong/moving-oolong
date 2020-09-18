import { createMuiTheme } from "@material-ui/core/styles"
import HussarBold from "assets/fonts/HussarBold.otf"

const hussarBold = {
    fontFamily: "Hussar Bold",
    fontStyle: "normal",
    src: `url(${HussarBold})`,
}

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
        fontFamily: ["Poppins", "sans-serif"].join(),
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [hussarBold],
                // h1: {
                //     fontFamily: ["Hussar Bold", "sans-serif"].join(),
                // },
                // h2: {
                //     fontFamily: ["Hussar Bold", "sans-serif"].join(),
                // },
            },
        },
    },
})

export default theme
