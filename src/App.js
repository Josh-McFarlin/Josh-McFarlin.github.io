import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

import Sidebar from "./components/Sidebar";

import IndexPage from "./pages/IndexPage";
import ProjectsPage from "./pages/ProjectsPage";


const theme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Sidebar>
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
