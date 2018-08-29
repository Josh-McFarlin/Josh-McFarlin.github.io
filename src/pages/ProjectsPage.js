import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Project from '../components/Project';
import SkillTag from '../components/SkillTag';
import { projectTags, projectsJSON } from '../data';


const styles = theme => ({
    grid: {
        width: '100%',
        margin: 0,
        alignContent: 'flex-start'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 12
    },
    tags: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.projects = projectsJSON.map((item) =>
            <Project
                title={item.title}
                image={item.images[0]}
                description={item.description}
                url={item.link.url}
                urlText={item.link.text}
                tags={item.tags}
            />
        );

        this.state = {
            tags: [],
            matchingProjects: this.projects
        };

        this.tagClickHandler = this.tagClickHandler.bind(this);
    }

    createProjects(numCols) {
        let projects = this.state.matchingProjects;

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
                    { projects[i] }
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

    tagClickHandler(tag, e) {
        e.preventDefault();

        let tags = this.state.tags;

        let newTags;

        if (tags.includes(tag)) {
            let index = tags.indexOf(tag);
            tags.splice(index, 1);

            this.setState({
                tags: tags,
                matchingProjects: this.projects.filter((x) => tags.every(i => x.props.tags.includes(i)))
            });
        } else {
            newTags = tag === "All" ? [] : this.state.tags.concat([tag]);

            this.setState({
                tags: newTags,
                matchingProjects: this.projects.filter((x) => newTags.every(i => x.props.tags.includes(i)))
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper>
                    <div className={classes.container}>
                        <Typography variant="title" gutterBottom>Filter Projects By Tags</Typography>
                        <div className={classes.tags}>
                            {
                                projectTags.map((item) =>
                                    <SkillTag
                                        color="secondary"
                                        title={item}
                                        clickHandler={this.tagClickHandler.bind(this, item)}
                                        selected={this.state.tags.includes(item)}
                                        key={item}
                                    />
                                )
                            }
                        </div>
                    </div>
                </Paper>

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