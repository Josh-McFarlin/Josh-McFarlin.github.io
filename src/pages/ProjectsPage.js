import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Project from '../components/Project';
import TagSelector from '../components/TagSelector';
import { projectTags, projectsJSON } from '../data';


const styles = theme => ({
    avatar: {
        margin: 10,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
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
                images={item.images}
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

        this.tagSelectHandler = this.tagSelectHandler.bind(this);
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

    tagSelectHandler(e) {
        e.preventDefault();

        let tags = e.target.value;

        this.setState({
            tags,
            matchingProjects: this.projects.filter((x) => tags.every(i => x.props.tags.includes(i)))
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <TagSelector selected={this.state.tags} handler={this.tagSelectHandler}>
                    {
                        projectTags.map(name => (
                            <MenuItem key={name} value={name}>
                                <Avatar className={classes.avatar}>
                                    { this.state.matchingProjects.filter((x) => x.props.tags.includes(name)).length }
                                </Avatar>
                                <ListItemText primary={name} />
                                <ListItemSecondaryAction>
                                    <Checkbox checked={this.state.tags.indexOf(name) > -1} />
                                </ListItemSecondaryAction>
                            </MenuItem>
                        ))
                    }
                </TagSelector>

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