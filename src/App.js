import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import Sidebar from "./components/Sidebar";

import IndexPage from "./pages/IndexPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";


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
                    main: "#00796b"
                },
                secondary: {
                    main: "#607D8B"
                }
            }
        });

        return (
            <MuiThemeProvider theme={customTheme}>
                <CssBaseline />
                <Router basename={process.env.PUBLIC_URL}>
                    <Sidebar dark={this.state.dark} toggleTheme={this.toggleTheme}>
                        <Switch>
                            <Route exact path="/" component={IndexPage} />
                            <Route path="/portfolio" component={ProjectsPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Sidebar>
                </Router>
            </MuiThemeProvider>
        );
    }
}
