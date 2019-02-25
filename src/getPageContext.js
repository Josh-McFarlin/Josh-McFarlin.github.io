import { SheetsRegistry } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';


function createPageContext() {
    return {
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
