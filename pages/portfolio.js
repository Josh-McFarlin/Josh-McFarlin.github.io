import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import Project from '../src/components/Project';
import TagSelector from '../src/components/TagSelector';
import { projectsJSON } from '../src/data';


const styles = (theme) => ({
    avatar: {
        margin: 10,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    fullGrid: {
        paddingTop: theme.spacing.unit
    },
    grid: {
        width: '100%',
        margin: 0,
        alignContent: 'flex-start'
    },
    column: {
        "&:nth-child(odd)": {
            "&:not(:first-of-type)": {
                paddingLeft: theme.spacing.unit / 2
            },
            "&:not(:last-of-type)": {
                paddingRight: theme.spacing.unit / 2
            }
        },
        "&:nth-child(even)": {
            paddingLeft: theme.spacing.unit / 2,
            "&:not(:last-of-type)": {
                paddingRight: theme.spacing.unit / 2
            }
        }
    },
    row: {
        padding: '0 !important',
        "&:not(:last-of-type)": {
            paddingBottom: `${theme.spacing.unit}px !important`
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0
    },
    tags: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

class ProjectsPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.projects = projectsJSON.map((item) => <Project info={item} />);

        this.state = {
            tags: [],
            matchingProjects: this.projects
        };
    }

    createProjects = (numCols) => {
        const { classes } = this.props;
        const { matchingProjects } = this.state;

        return Array.from(Array(numCols).keys(), (colNum) => (
            <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                container
                zeroMinWidth
                spacing={24}
                className={`${classes.grid} ${classes.column}`}
                key={"Grid" + colNum}
            >
                {matchingProjects
                    .filter((item, index) => ((index - colNum) % numCols === 0))
                    .map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            zeroMinWidth
                            key={`Project${colNum}${index}`}
                            className={classes.row}
                        >
                            { item }
                        </Grid>
                    ))
                }
            </Grid>
        ));
    };

    clearSelectHandler = (e) => {
        e.preventDefault();

        this.setState({
            tags: [],
            matchingProjects: this.projects
        });
    };

    tagSelectHandler = (e) => {
        e.preventDefault();

        let tags = e.target.value;

        this.setState({
            tags,
            matchingProjects: this.projects.filter((x) => tags.every((i) => x.props.info.tags.includes(i)))
        });
    };

    compareTags = (a, b) => {
        const { tags, matchingProjects } = this.state;

        if (tags.indexOf(a.props.value) < tags.indexOf(b.props.value)) {
            return 1;
        }

        if (tags.indexOf(a.props.value) > tags.indexOf(b.props.value)) {
            return -1;
        }

        let aMatch = matchingProjects.filter((x) => x.props.info.tags.includes(a.props.value)).length;
        let bMatch = matchingProjects.filter((x) => x.props.info.tags.includes(b.props.value)).length;

        if (aMatch < bMatch) {
            return 1;
        }

        if (bMatch > aMatch) {
            return -1;
        }

        return 0;
    };

    render() {
        const { classes } = this.props;

        let tags = projectsJSON.reduce((a, b) => a.concat(b.tags), []);
        let duplicates = [...new Set(tags.filter((el, index) => tags.indexOf(el, index + 1) > 0))];
        let menuItems = duplicates.map((name) => (
            <MenuItem key={name} value={name}>
                <Avatar className={classes.avatar}>
                    { this.state.matchingProjects.filter((x) => x.props.info.tags.includes(name)).length }
                </Avatar>
                <ListItemText primary={name} />
                <Checkbox checked={this.state.tags.indexOf(name) > -1} />
            </MenuItem>
        ));

        return (
            <React.Fragment>
                <TagSelector
                    selected={this.state.tags}
                    selectHandler={this.tagSelectHandler}
                    clearHandler={this.clearSelectHandler}
                >
                    { menuItems.sort(this.compareTags) }
                </TagSelector>

                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <Grid container className={`${classes.grid} ${classes.fullGrid}`}>
                        { this.createProjects(1) }
                    </Grid>
                </Hidden>

                <Hidden only={['xs', 'lg', 'xl']}>
                    <Grid container className={`${classes.grid} ${classes.fullGrid}`}>
                        { this.createProjects(2) }
                    </Grid>
                </Hidden>

                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid container className={`${classes.grid} ${classes.fullGrid}`}>
                        { this.createProjects(3) }
                    </Grid>
                </Hidden>
            </React.Fragment>
        );
    }
}

ProjectsPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProjectsPage);
