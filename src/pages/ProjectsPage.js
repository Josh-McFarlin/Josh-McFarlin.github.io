import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Project from '../components/Project';


const projects = [
    {
        "title": "AskBuzz",
        "description": "AskBuzz is an Alexa skill for use by Georgia Tech students. This app was written by Josh McFarlin, Ryan Miles, and Dylan Nektalov during HackGT 2017. This skill offers information about Georgia Tech history, dining options, bus availability, campus news and events, Georgia Tech social media posts, WREK radio, and more.",
        "images": [
            'Dot.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/AskBuzz"
        }
    },
    {
        "title": "AstroIDE",
        "description": "AstroIDE is an IDE with syntax highlighting support for over 110 languages. Written in Java utilizing JavaFX and Ace.js for syntax highlighting. This is an ongoing project which began in December 2017 that started as a way to develop my skills in Java, JavaFX, and JavaScript simultaneously.",
        "images": [
            'AstroIDEMain.jpg',
            'AstroIDESearch.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/AstroIDE"
        }
    },
    {
        "title": "CryptoCompareAPI",
        "description": "A Java implementation of the CryptoCompare API service, which provides access to cryptocurrency information about coins, exchanges, historic data, market data, mining equipment and contracts, news, and social networks.",
        "images": [
            'CryptoCompare.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/CryptoCompareAPI"
        }
    },
    {
        "title": "GraffitiMap",
        "description": "GraffitiMap is a website that allows users to view a map of locations where doing graffiti is legal, and submit their own graffiti spots for others to find. The website is written in JavaScript and JQuery, and utilizes Google's Firebase for location storage and login. This website was created for a group project for English 1101.",
        "images": [
            'GraffitiMapMain.jpg',
            'GraffitiMapSubmit.jpg',
            'GraffitiMapAdmin.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/GraffitiMap"
        }
    },
    {
        "title": "ParkHere",
        "description": "ParkHere is a Android and web app that creates simple a cloud-based parking system. Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot. ParkHere was created by Ryan Miles and Josh McFarlin for a hackathon.",
        "images": [
            'ParkHere.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Ryanm14/ParkHere"
        }
    },
    {
        "title": "PyWeatherService",
        "description": "PyWeatherService is a proof of concept SMS weather information system written in Python 3. Transmitting over SMS instead of data enables access to weather information during moments in which cell networks are strained such as dangerous weather events.",
        "images": [
            'Weather.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/PyWeatherService"
        }
    },
    {
        "title": "Geometry Code",
        "description": "Geometry Code is an iOS app that uses programming-like syntax to create 3D models from different geometric shapes. Geometry Code has support for seven different 3D geometries along with position and rotation modifiers.",
        "images": [
            'ProgrammingAppViewer.jpg',
            'ProgrammingAppEditor.jpg',
            'ProgrammingAppHelp.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/Geometry-Code"
        }
    },
    {
        "title": "This Website",
        "description": "This website has gone through three major revisions; you are currently looking at the third version of this website, but the previous two can be viewed on my GitHub. The first and second version of this website were created entirely by myself in HTML, CSS, JavaScript, and JQuery. The current version was written in ReactJS and is hosted on Github Pages.",
        "images": [
            'WebStorm.jpg',
            'HomeProgramming.jpg'
        ],
        "link": {
            "text": "View Source on GitHub",
            "url": "https://github.com/Josh-McFarlin/Josh-McFarlin.github.io"
        }
    },
    {
        "title": "3D Scanning of Brains",
        "description": "Conducted at the Evolutionary Neuroscience Laboratory at George Washington University. Developed a procedure for creating 3D models of brains and soft tissue using photogrammetry. Documented findings in a research paper now used by graduate and post-graduate students to aid in the preservation of specimen and research.",
        "images": [
            'Brain1.jpg',
            'Brain2.jpg',
            'Brain3.jpg',
            'Brain4.jpg',
            'Brain5.jpg',
            'Brain6.jpg'
        ],
        "link": {
            "text": "Read Research Paper",
            "url": "https://www.dropbox.com/s/rsf52b8uqxovtaw/Joshua%20T%20McFarlin_GW%20Internship%20Research%20Paper.pdf?dl=0"
        }
    }
];

class ProjectsPage extends React.Component {
    render() {
        let amount = 3;
        if (isWidthUp('lg', this.props.width)) {
            amount = 3;
        } else if (isWidthUp('sm', this.props.width)) {
            amount = 2;
        } else {
            amount = 1;
        }

        let splitProjects = [];
        while (splitProjects.push([]) < amount);

        let index = 0;

        for (let i = 0; i < projects.length; i++) {
            splitProjects[index].push(
                <Grid
                    item
                    xs={12}
                    zeroMinWidth
                    key={"Project" + i}
                >
                    <Project
                        multiplier={isWidthUp('sm', this.props.width) ? 2 : 1}
                        title={projects[i].title}
                        image={projects[i].images[0]}
                        description={projects[i].description}
                        url={projects[i].link.url}
                        urlText={projects[i].link.text}
                    />
                </Grid>
            );
            index++;
            if (index === splitProjects.length) index = 0;
        }

        let projectColumns = [];
        for (let i = 0; i < amount; i++) {
            projectColumns[i] = (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    zeroMinWidth
                    key={"Grid" + i}
                >
                    <Grid container spacing={24}>
                        {splitProjects[i]}
                    </Grid>
                </Grid>
            )
        }

        return (
            <Grid container spacing={24}>
                { projectColumns }
            </Grid>
        );
    }
}

ProjectsPage.propTypes = {
    width: PropTypes.any.isRequired,
};

export default withWidth()(ProjectsPage)