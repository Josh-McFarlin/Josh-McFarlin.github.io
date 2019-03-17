import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Project from '../src/components/Project';
import { projects } from '../src/data';


const styles = (theme) => ({
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

class ProjectsPage extends React.Component {
    createProjects = (numCols) => {
        const { classes } = this.props;

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
                {projects
                    .filter((item, index) => ((index - colNum) % numCols === 0))
                    .map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            zeroMinWidth
                            key={`Project${colNum}${index}`}
                            className={classes.row}
                        >
                            <Project info={item} />
                        </Grid>
                    ))
                }
            </Grid>
        ));
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <Grid container className={classes.grid}>
                        { this.createProjects(1) }
                    </Grid>
                </Hidden>

                <Hidden only={['xs', 'lg', 'xl']}>
                    <Grid container className={classes.grid}>
                        { this.createProjects(2) }
                    </Grid>
                </Hidden>

                <Hidden only={['xs', 'sm', 'md']}>
                    <Grid container className={classes.grid}>
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
