import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import Sidebar from "./components/Sidebar";

import IndexPage from "./pages/IndexPage";
import ProjectsPage from "./pages/ProjectsPage";


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dark: false
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({
            dark: !this.state.dark
        });
    }

    render() {
        const customTheme = createMuiTheme({
            palette: {
                type: this.state.dark ? "dark" : "light",
                primary: {
                    // light: will be calculated from palette.primary.main,
                    main: "#00796b",
                    // dark: will be calculated from palette.primary.main,
                    // contrastText: will be calculated to contrast with palette.primary.main
                },
                secondary: {
                    // light: will be calculated from palette.secondary.main,
                    main: "#607D8B",
                    // dark: will be calculated from palette.secondary.main,
                    // contrastText: will be calculated to contrast with palette.secondary.main
                }
            }
        });

        return (
            <MuiThemeProvider theme={customTheme}>
                <CssBaseline />
                <Router>
                    <Sidebar dark={this.state.dark} toggleTheme={this.toggleTheme}>
                        <Switch>
                            <Route exact path="/" component={IndexPage} />
                            <Route path="/portfolio" component={ProjectsPage} />
                            <Route component={IndexPage} />
                        </Switch>
                    </Sidebar>
                </Router>
            </MuiThemeProvider>
        );
    }
}
