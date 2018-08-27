import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';

import Sidebar from "./components/Sidebar";

import IndexPage from "./pages/IndexPage";
import ProjectsPage from "./pages/ProjectsPage";

import { links, contact } from "./data";

const App = () => (
    <Router>
        <Sidebar
            links={links}
            image={window.location.origin + '/static/images/Me.jpg'}
            name="Josh McFarlin"
            occupation="Software Engineer"
            contact={contact}
        >
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/portfolio" component={ProjectsPage} />
                <Route component={IndexPage} />
            </Switch>
        </Sidebar>
    </Router>
);

export default App;
