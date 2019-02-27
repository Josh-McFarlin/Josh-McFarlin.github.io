import React from 'react';
import { Person, Folder, Assignment } from '@material-ui/icons';


export const links = [
    {
        title: "About Me",
        link: "/",
        icon: <Person />
    },
    {
        title: "Portfolio",
        link: "/portfolio",
        icon: <Folder />
    },
    {
        title: "Resume",
        link: "https://www.dropbox.com/s/8ppqhfdfvedmx8d/JoshuaMcFarlin_Resume.pdf?dl=0",
        icon: <Assignment />
    }
];

export const personal = {
    name: "Josh McFarlin",
    occupation: "Software Engineer",
    image: "Me.jpg",
    about: "I am currently a second-year at the Georgia Institute of Technology, pursuing a bachelor's degree in Computer Science. I began programming at a young age by teaching myself Python through documentation. I have experience with full-stack programming, and I have worked on many projects focusing on desktop, mobile, and web platforms. Efficiency and design are very important principles to me, and I love creating programs and websites that simplify user experience."
};

export const contact = [
    {
        type: "Email",
        info: "jmcfarlin6@gatech.edu",
        link: "mailto:jmcfarlin6@gatech.edu"
    },
    {
        type: "LinkedIn",
        info: "https://linkedin.com/in/joshmcfarlin/",
        link: "https://linkedin.com/in/joshmcfarlin/"
    },
];

export const work = [
    {
        company: "Bettercloud",
        position: "Software Engineering Intern",
        location: "Atlanta",
        startDate: "January 2019",
        endDate: null,
        description: [
            "Software engineering intern for Bettercloud's AAA team responsible for creating end-user functionality and services.",
            "Everyday tasks include programming automated workflows which interface with SaaS APIs, using Java and JavaScript to interface microservices with APIs for front-end use.",
            "Also involved with improving several internal resources in React and Redux."
        ]
    }
];

export const education = [
    {
        name: "Georgia Institute of Technology",
        info: "Currently pursuing a Bachelor's Degree in Computer Science with a focus in Intelligence and Information Internetworks.",
        startDate: "2017",
        endDate: "2021",
        completedCourses: [
            "CS 2340 - Objects and Design",
            "CS 2110 - Computer Organization and Programming",
            "CS 1332 - Data Structures and Algorithms",
            "CS 1331 - Intro to Object Oriented Programming"
        ],
        currentCourses: []
    },
    {
        name: "Creekview High School",
        info: "Graduated with a High School Diploma.",
        startDate: "2013",
        endDate: "2017"
    }
];

export const skills = [
    {
        type: "Languages",
        skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "Swift"]
    },
    {
        type: "Libraries and Frameworks",
        skills: ["Node.js", "React", "Ionic", "jQuery", "Django", "Flask"]
    },
    {
        type: "Databases and Content Delivery",
        skills: ["MongoDB", "SQLite", "MySQL", "Cloudflare", "Fastly", "Cloudinary"]
    },
    {
        type: "DevOps",
        skills: ["GitHub", "Docker", "Firebase", "Google Cloud", "Amazon AWS", "npm"]
    }
];

export const projectsJSON = [
    {
        "title": "WebCache",
        "tags": ["React", "MongoDB", "Firebase", "HTML", "JavaScript", "CSS", "Node.js"],
        "description": "WebCache is a service for automatically taking screenshots of any website at any time. Written in HTML, CSS, and JavaScript using React for the front-end, while using Express and MongoDB for the back-end. This is an ongoing project which began in July 2018 as a way to improve my React and Express skills.",
        "images": [
            'WebCache.jpg'
        ]
    },
    {
        "title": "AskBuzz",
        "tags": ["Python", "Flask"],
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
        "tags": ["Java", "JavaFX"],
        "description": "AstroIDE is an IDE with syntax highlighting support for over 110 languages. Written in Java utilizing JavaFX and Ace.js for syntax highlighting. This is an ongoing project which began in December 2017 that started as a way to improve my skills in Java, JavaFX, and JavaScript simultaneously.",
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
        "tags": ["Java"],
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
        "tags": ["HTML", "JavaScript", "CSS", "jQuery", "Firebase"],
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
        "tags": ["HTML", "JavaScript", "CSS", "jQuery", "Firebase", "Java", "Flask"],
        "description": "ParkHere is an Android and web app that creates simple a cloud-based parking system. Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot. ParkHere was created by Ryan Miles and Josh McFarlin for a hackathon.",
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
        "tags": ["Python"],
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
        "tags": ["Swift"],
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
        "tags": ["React", "HTML", "JavaScript", "CSS"],
        "description": "This website has gone through three major revisions; you are currently looking at the third version of this website, but the previous two can be viewed on my GitHub. The first and second version of this website were created entirely by myself in HTML, CSS, JavaScript, and JQuery. The current version was written in React and is hosted on Github Pages.",
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
        "tags": [],
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
