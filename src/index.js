import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import ThemeContext from "./ThemeContext";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import IndexPage from "./pages/IndexPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            toggleTheme: () =>
                this.setState({
                    theme: this.state.theme === 'light' ? 'dark' : 'light'
                })
        };
    }

    render() {
        const customTheme = createMuiTheme({
            palette: {
                type: this.state.theme,
                primary: {
                    main: '#00796b'
                },
                secondary: {
                    main: '#607D8B'
                }
            }
        });

        return (
            <ThemeContext.Provider value={this.state}>
                <MuiThemeProvider theme={customTheme}>
                    <CssBaseline />
                    <Router basename={process.env.PUBLIC_URL}>
                        <Sidebar>
                            <Switch>
                                <Route exact path="/" component={IndexPage} />
                                <Route path="/portfolio" component={ProjectsPage} />
                            </Switch>
                        </Sidebar>
                    </Router>
                </MuiThemeProvider>
            </ThemeContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
