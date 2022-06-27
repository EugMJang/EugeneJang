import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#38405F",
        },
        secondary: {
            main: '#ce93d8',
        },
        text: {
            primary: "#38405F"
        },
        background: {
            default: "#ECE8EF"
        },
    },
    typography: {
        h1: {
            fontFamily: "Shadows Into Light",
            fontSize: 60
        },
        h2: {
            fontFamily: "Open Sans",
            fontSize: 60
        },
        h3: {
            fontFamily: "Open Sans",
            fontSize: 40
        }
    }
});

export default theme;