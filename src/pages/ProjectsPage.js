import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Project from '../components/Project';
import { projects } from '../data';


const styles = theme => ({
    grid: {
        width: '100%',
        margin: 0,
        alignContent: 'flex-start'
    }
});

class ProjectsPage extends React.Component {
    createProjects(numCols) {
        let splitProjects = [];
        for (let i = 0; i < numCols; i++) {
            splitProjects.push([]);
        }

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
            index = (index + 1) % numCols;
        }

        let projectColumns = [];
        for (let i = 0; i < numCols; i++) {
            projectColumns[i] = (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    container
                    zeroMinWidth
                    spacing={24}
                    className={this.props.classes.grid}
                    key={"Grid" + i}
                >
                    { splitProjects[i] }
                </Grid>
            )
        }

        return projectColumns;
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Hidden smUp>
                    <Grid container className={classes.grid}>
                        { this.createProjects(1) }
                    </Grid>
                </Hidden>

                <Hidden only={['xs', 'lg', 'xl']}>
                    <Grid container className={classes.grid}>
                        { this.createProjects(2) }
                    </Grid>
                </Hidden>

                <Hidden mdDown>
                    <Grid container className={classes.grid}>
                        { this.createProjects(3) }
                    </Grid>
                </Hidden>
            </div>
        );
    }
}

ProjectsPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProjectsPage);