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
    image: {
        imgSrc: "/static/images/Me",
        types: ["webp"],
        defaultType: "jpg"
    },
    about: "Hi, I'm Josh! I'm a third-year Computer Science major at the Georgia Institute of Technology. I began programming at a young age by teaching myself Python, and I've been hooked ever since. I have experience with full-stack programming, and I have worked on many projects focusing on desktop, mobile, and web platforms. Efficiency and design are very important principles to me, and I love creating websites and apps that simplify user experience."
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
        company: "BetterCloud",
        position: "Software Engineering Intern",
        location: "Atlanta, GA",
        startDate: "January",
        endDate: "May 2019",
        description: [
            "Intern for BetterCloud's Workflows team responsible for developing end-user functionality.",
            "Developed automated processes in Java and JavaScript to serve as middleware interfacing microservices with APIs for customer use; created automated tests to verify expected functionality of processes.",
            "Worked on functionality and UX of BetterCloud’s customer and internal development dashboards using React and Redux interfacing with a Spring back-end."
        ]
    }
];

export const education = [
    {
        name: "Georgia Institute of Technology",
        info: "Currently pursuing a Bachelor's Degree in Computer Science concentrating in Intelligence and Information Internetworks.",
        startDate: "2017",
        endDate: "2021",
        completedCourses: [
            "CS 2340 - Objects and Design",
            "CS 2110 - Computer Organization and Programming",
            "CS 1332 - Data Structures and Algorithms",
            "CS 1331 - Intro to Object Oriented Programming"
        ],
        currentCourses: [
            "CS 3600 - Intro to Artificial Intelligence"
        ]
    }
];

export const skills = [
    {
        type: "Languages",
        skills: [
            {
                name: "Java",
                image: {
                    imgSrc: "/static/images/skills/java",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Python",
                image: {
                    imgSrc: "/static/images/skills/python",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "JavaScript",
                image: {
                    imgSrc: "/static/images/skills/javascript",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "HTML",
                image: {
                    imgSrc: "/static/images/skills/html",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "CSS",
                image: {
                    imgSrc: "/static/images/skills/css",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Swift",
                image: {
                    imgSrc: "/static/images/skills/swift",
                    types: ["webp"],
                    defaultType: "png"
                }
            }
        ]
    },
    {
        type: "Libraries and Frameworks",
        skills: [
            {
                name: "React",
                image: {
                    imgSrc: "/static/images/skills/react",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Node.js",
                image: {
                    imgSrc: "/static/images/skills/nodejs",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Ionic",
                image: {
                    imgSrc: "/static/images/skills/ionic",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "jQuery",
                image: {
                    imgSrc: "/static/images/skills/jquery",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Django",
                image: {
                    imgSrc: "/static/images/skills/django",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Flask",
                image: {
                    imgSrc: "/static/images/skills/flask",
                    types: ["webp"],
                    defaultType: "png"
                }
            }
        ]
    },
    {
        type: "Databases and Content Delivery",
        skills: [
            {
                name: "MongoDB",
                image: {
                    imgSrc: "/static/images/skills/mongodb",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "SQLite",
                image: {
                    imgSrc: "/static/images/skills/sqlite",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "MySQL",
                image: {
                    imgSrc: "/static/images/skills/mysql",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Cloudflare",
                image: {
                    imgSrc: "/static/images/skills/cloudflare",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Fastly",
                image: {
                    imgSrc: "/static/images/skills/fastly",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Cloudinary",
                image: {
                    imgSrc: "/static/images/skills/cloudinary",
                    types: ["webp"],
                    defaultType: "png"
                }
            }
        ]
    },
    {
        type: "DevOps",
        skills: [
            {
                name: "GitHub",
                image: {
                    imgSrc: "/static/images/skills/github",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Docker",
                image: {
                    imgSrc: "/static/images/skills/docker",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Firebase",
                image: {
                    imgSrc: "/static/images/skills/firebase",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Google Cloud",
                image: {
                    imgSrc: "/static/images/skills/gcloud",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "Amazon AWS",
                image: {
                    imgSrc: "/static/images/skills/aws",
                    types: ["webp"],
                    defaultType: "png"
                }
            },
            {
                name: "npm",
                image: {
                    imgSrc: "/static/images/skills/npm",
                    types: ["webp"],
                    defaultType: "png"
                }
            }
        ]
    }
];

export const projects = [
    {
        title: "CryptoQR",
        tags: ["React", "Next.js", "Firebase", "HTML", "JavaScript", "CSS", "Node.js", "Express"],
        description: "Created a tool to generate a single QR code to receive payments or donations in multiple cryptocurrencies while enabling dynamic addresses. Written in React for the front-end, while using Express, Next.js, and Firebase for the back-end.",
        images: [
            {
                imgSrc: '/static/images/projects/CryptoQRPage',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/CryptoQROpen',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/CryptoQRCreate',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/CryptoQRProfile',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/CryptoQRHome',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/crypto-qr"
        }
    },
    {
        title: "Donation Tracker",
        tags: ["Java", "Firebase"],
        description: "Developed an open-source Android app for providing information about donation centers, enabling users to find nearby donation centers, and employees to view, search, and edit inventories for each location. Worked on a team with four other students to develop the app over the course of a semester, learning valuable skills with teamwork, leadership, and time management.",
        images: [
            {
                imgSrc: '/static/images/projects/DonationTracker',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/benmelnick/DonationTracker"
        }
    },
    {
        title: "Donation Tracker React",
        tags: ["React", "Firebase", "HTML", "JavaScript", "CSS"],
        description: "Individually developed an alternative web implementation of my team's Donation Tracker app in React to enable more devices to use the service.",
        images: [
            {
                imgSrc: '/static/images/projects/DonationReactHome',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/DonationReactLocation',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/AskBuzz"
        }
    },
    {
        title: "WebCache",
        tags: ["React", "MongoDB", "Firebase", "HTML", "JavaScript", "CSS", "Node.js"],
        description: "WebCache is a service for automatically taking screenshots of any website at any time. Written in HTML, CSS, and JavaScript using React for the front-end, while using Express and MongoDB for the back-end. This is an ongoing project which began in July 2018 as a way to improve my React and Express skills.",
        images: [
            {
                imgSrc: '/static/images/projects/WebCache',
                types: ["webp"],
                defaultType: "jpg"
            }
        ]
    },
    {
        title: "AskBuzz",
        tags: ["Python", "Flask"],
        description: "AskBuzz is an Alexa skill for use by Georgia Tech students. This app was written by Josh McFarlin, Ryan Miles, and Dylan Nektalov during HackGT 2017. This skill offers information about Georgia Tech history, dining options, bus availability, campus news and events, Georgia Tech social media posts, WREK radio, and more.",
        images: [
            {
                imgSrc: '/static/images/projects/Dot',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/AskBuzz"
        }
    },
    {
        title: "Java CryptoCompareAPI",
        tags: ["Java"],
        description: "A Java implementation of the CryptoCompare API service, which provides access to cryptocurrency information about coins, exchanges, historic data, market data, mining equipment and contracts, news, and social networks.",
        images: [
            {
                imgSrc: '/static/images/projects/CryptoCompare',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/CryptoCompareAPI"
        }
    },
    {
        title: "AstroIDE",
        tags: ["Java", "JavaFX"],
        description: "AstroIDE is an IDE with syntax highlighting support for over 110 languages. Written in Java utilizing JavaFX and Ace.js for syntax highlighting. This was a simple project that started as a way to improve my skills in Java, JavaFX, and JavaScript simultaneously.",
        images: [
            {
                imgSrc: '/static/images/projects/AstroIDEMain',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/AstroIDESearch',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/AstroIDE"
        }
    },
    {
        title: "GraffitiMap",
        tags: ["HTML", "JavaScript", "CSS", "jQuery", "Firebase"],
        description: "GraffitiMap is a website that allows users to view a map of locations where doing graffiti is legal, and submit their own graffiti spots for others to find. The website is written in JavaScript and JQuery, and utilizes Google's Firebase for location storage and login. This website was created for a group project for English 1101.",
        images: [
            {
                imgSrc: '/static/images/projects/GraffitiMapMain',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/GraffitiMapSubmit',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/GraffitiMapAdmin',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/GraffitiMap"
        }
    },
    {
        title: "ParkHere",
        tags: ["HTML", "JavaScript", "CSS", "jQuery", "Firebase", "Java", "Flask"],
        description: "ParkHere is an Android and web app that creates simple a cloud-based parking system. Similar to Airbnb, ParkHere allows people to create their own parking lots which users can pay for a timed spot. ParkHere was created by Ryan Miles and Josh McFarlin for a hackathon.",
        images: [
            {
                imgSrc: '/static/images/projects/ParkHere',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Ryanm14/ParkHere"
        }
    },
    {
        title: "PyWeatherService",
        tags: ["Python"],
        description: "PyWeatherService is a proof of concept SMS weather information system written in Python 3. Transmitting over SMS instead of data enables access to weather information during moments in which cell networks are strained such as dangerous weather events.",
        images: [
            {
                imgSrc: '/static/images/projects/Weather',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/PyWeatherService"
        }
    },
    {
        title: "Geometry Code",
        tags: ["Swift"],
        description: "Geometry Code is an iOS app that uses programming-like syntax to create 3D models from different geometric shapes. Geometry Code has support for seven different 3D geometries along with position and rotation modifiers.",
        images: [
            {
                imgSrc: '/static/images/projects/ProgrammingAppViewer',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/ProgrammingAppEditor',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/ProgrammingAppHelp',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/Geometry-Code"
        }
    },
    {
        title: "This Website",
        tags: ["React", "HTML", "JavaScript", "CSS"],
        description: "This website has gone through four major revisions; you are currently looking at the fourth version of this website, but the previous three can be viewed on my GitHub. The first and second version of this website were created entirely by myself in HTML, CSS, JavaScript, and jQuery. The latest two versions were written in React, but V3 used Create-React-App and was hosted on Github Pages, while V4 uses NextJS to utilize Server-Side Rendering to greatly improve performance.",
        images: [
            {
                imgSrc: '/static/images/projects/WebStorm',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/HomeProgramming',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "View Source on GitHub",
            url: "https://github.com/Josh-McFarlin/Josh-McFarlin.github.io"
        }
    },
    {
        title: "3D Scanning of Brains",
        tags: [],
        description: "Conducted at the Evolutionary Neuroscience Laboratory at George Washington University. Developed a procedure for creating 3D models of brains and soft tissue using photogrammetry. Documented findings in a research paper now used by graduate and post-graduate students to aid in the preservation of specimen and research.",
        images: [
            {
                imgSrc: '/static/images/projects/Brain1',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/Brain2',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/Brain3',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/Brain4',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/Brain5',
                types: ["webp"],
                defaultType: "jpg"
            },
            {
                imgSrc: '/static/images/projects/Brain6',
                types: ["webp"],
                defaultType: "jpg"
            }
        ],
        link: {
            text: "Read Research Paper",
            url: "https://www.dropbox.com/s/rsf52b8uqxovtaw/Joshua%20T%20McFarlin_GW%20Internship%20Research%20Paper.pdf?dl=0"
        }
    }
];
