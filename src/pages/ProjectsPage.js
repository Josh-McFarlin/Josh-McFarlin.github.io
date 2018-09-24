import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import Project from '../components/Project';
import TagSelector from '../components/TagSelector';
import { projectsJSON } from '../data';


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

        this.projects = projectsJSON.map((item) => <Project info={item} />);

        this.state = {
            tags: [],
            matchingProjects: this.projects
        };

        this.clearSelectHandler = this.clearSelectHandler.bind(this);
        this.tagSelectHandler = this.tagSelectHandler.bind(this);
        this.compareTags = this.compareTags.bind(this);
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

    clearSelectHandler(e) {
        e.preventDefault();

        this.setState({
            tags: [],
            matchingProjects: this.projects
        });
    };

    tagSelectHandler(e) {
        e.preventDefault();

        let tags = e.target.value;

        this.setState({
            tags,
            matchingProjects: this.projects.filter(x => tags.every(i => x.props.info.tags.includes(i)))
        });
    };

    compareTags(a, b) {
        let tags = this.state.tags;
        let matching = this.state.matchingProjects;

        if (tags.indexOf(a.props.value) < tags.indexOf(b.props.value)) {
            return 1;
        }

        if (tags.indexOf(a.props.value) > tags.indexOf(b.props.value)) {
            return -1;
        }

        let aMatch = matching.filter((x) => x.props.info.tags.includes(a.props.value)).length;
        let bMatch = matching.filter((x) => x.props.info.tags.includes(b.props.value)).length;

        if (aMatch < bMatch) {
            return 1;
        }

        if (bMatch > aMatch) {
            return -1;
        }

        return 0;
    }

    render() {
        const { classes } = this.props;

        let tags = projectsJSON.reduce((a, b) => a.concat(b.tags), []);
        let duplicates = [...new Set(tags.filter((el, index) => tags.indexOf(el, index + 1) > 0))];
        let menuItems = duplicates.map(name =>
            <MenuItem key={name} value={name}>
                <Avatar className={classes.avatar}>
                    { this.state.matchingProjects.filter((x) => x.props.info.tags.includes(name)).length }
                </Avatar>
                <ListItemText primary={name} />
                <Checkbox checked={this.state.tags.indexOf(name) > -1} />
            </MenuItem>
        );

        return (
            <div>
                <TagSelector
                    selected={this.state.tags}
                    selectHandler={this.tagSelectHandler}
                    clearHandler={this.clearSelectHandler}
                >
                    { menuItems.sort(this.compareTags) }
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