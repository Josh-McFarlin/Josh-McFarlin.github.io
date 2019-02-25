import { SheetsRegistry } from 'jss';
import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles';


const lightTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        type: 'light',
        primary: {
            main: '#00796b'
        },
        secondary: {
            main: '#607D8B'
        }
    }
});

const darkTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#00796b'
        },
        secondary: {
            main: '#607D8B'
        }
    }
});


function createPageContext() {
    return {
        lightTheme,
        darkTheme,
        sheetsManager: new Map(),
        sheetsRegistry: new SheetsRegistry(),
        generateClassName: createGenerateClassName()
    };
}

let pageContext;

export default function getPageContext() {
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!pageContext) {
        pageContext = createPageContext();
    }

    return pageContext;
}
