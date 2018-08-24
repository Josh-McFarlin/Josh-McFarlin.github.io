import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { School, Computer } from '@material-ui/icons';

import ColoredCard from '../components/ColoredCard';


const education = [
    {
        name: "Georgia Institute of Technology",
        info: "Currently pursuing a Bachelor's Degree in Computer Science with a focus in Intelligence and Information Internetworks.",
        startDate: "2017",
        endDate: "2021"
    },
    {
        name: "Creekview High School",
        info: "Graduated with a High School Diploma.",
        startDate: "2013",
        endDate: "2017"
    }
];

const skills = [
    {
        type: "Languages",
        skills: ["Java", "Python", "JavaScript (ES6)", "JSX", "HTML", "CSS", "Swift"]
    },
    {
        type: "Libraries and Frameworks",
        skills: ["Node.js", "ReactJS", "Ionic", "jQuery", "Django", "Flask"]
    },
    {
        type: "DevOps",
        skills: ["GitHub", "Docker", "Firebase", "Google Cloud", "Amazon AWS", "npm", "Intellij IDEA", "PyCharm", "WebStorm"]
    }
];

export default class IndexPage extends React.Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <ColoredCard icon={<School/>} title="Education">
                        {
                            education.map((item, index) =>
                                <div
                                    key={item.name}
                                    style={{ marginBottom: index === education.length - 1 ? 0 : 30 }}
                                >
                                    <Typography variant="title" gutterBottom>{item.name}</Typography>
                                    <Typography variant="subheading">{item.startDate} - {item.endDate}</Typography>
                                    <Typography variant="subheading" paragraph>{item.info}</Typography>
                                </div>
                            )
                        }
                    </ColoredCard>
                </Grid>

                <Grid item xs={12}>
                    <ColoredCard icon={<Computer/>} title="Skills">
                        {
                            skills.map((item, index) =>
                                <div
                                    key={item.type}
                                    style={{ marginBottom: index === education.length - 1 ? 0 : 30 }}
                                >
                                    <Typography variant="title" gutterBottom>{item.type}</Typography>
                                    <ul>
                                        {
                                            item.skills.map((item) =>
                                                <li key={item}><Typography variant="subheading">{item}</Typography></li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </ColoredCard>
                </Grid>
            </Grid>
        );
    }
}