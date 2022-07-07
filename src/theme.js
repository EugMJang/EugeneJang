import { createTheme } from '@mui/material/styles';

const def = createTheme();

const { breakpoints } = def

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
            fontSize: 70,
            [breakpoints.down('md')]: {
                fontSize: 50
            }
        },
        h2: {
            fontFamily: "Open Sans",
            fontSize: 60,
            [breakpoints.down('md')]: {
                fontSize: 35
            }
        },
        h3: {
            fontFamily: "Open Sans",
            fontSize: 40,
            [breakpoints.down('md')]: {
                fontSize: 30
            }
        }
    }
});

export default theme;