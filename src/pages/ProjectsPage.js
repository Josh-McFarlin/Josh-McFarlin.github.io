import React from 'react';
import Grid from '@material-ui/core/Grid';

import Project from '../components/Project';

import { projects } from '../data';


export default class ProjectsPage extends React.Component {
    render() {
        let splitProjects = [[], [], []];

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
                        title={projects[i].title}
                        image={projects[i].images[0]}
                        description={projects[i].description}
                        url={projects[i].link.url}
                        urlText={projects[i].link.text}
                    />
                </Grid>
            );
            index = (index + 1) % splitProjects.length;
        }

        let projectColumns = [];
        for (let i = 0; i < splitProjects.length; i++) {
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