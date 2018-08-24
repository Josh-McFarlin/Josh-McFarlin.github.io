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


const links = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About Me",
        link: "/aboutme/"
    },
    {
        title: "Portfolio",
        link: "/portfolio/"
    },
    {
        title: "Resume",
        link: "https://www.dropbox.com/s/8ppqhfdfvedmx8d/JoshuaMcFarlin_Resume.pdf?dl=0/"
    }
];

const contact = [
    {
        type: "Phone",
        info: "770-265-2664",
        link: "tel:+1-770-265-2664"
    },
    {
        type: "Email",
        info: "jmcfarlin6@gatech.edu",
        link: "mailto:jmcfarlin6@gatech.edu"
    },
    {
        type: "LinkedIn",
        info: "linkedin.com/in/joshmcfarlin/",
        link: "https://linkedin.com/in/joshmcfarlin/"
    },
];

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
