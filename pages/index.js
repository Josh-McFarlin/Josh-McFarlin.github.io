import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { Person, School, Computer } from '@material-ui/icons';

import ColoredCard from '../src/components/ColoredCard';
import Skill from '../src/components/Skill';
import { personal, education, skills } from '../src/data';


const styles = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    grid: {
        width: '100%',
        margin: 0,
        alignContent: 'flex-start',
        justifyContent: 'center'
    },
    extraMargin: {
        margin: '0 50px'
    },
    courses: {
        marginTop: 15
    },
    list: {
        margin: 0
    }
};

class IndexPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                spacing={24}
                className={classes.grid}
            >
                <Grid item xs={12}>
                    <ColoredCard
                        color="primary"
                        icon={<Person />}
                        title="About Me"
                        padding
                    >
                        <Typography variant="subtitle1">{personal.about}</Typography>
                    </ColoredCard>
                </Grid>

                <Grid item xs={12}>
                    <ColoredCard
                        color="primary"
                        icon={<School />}
                        title="Education"
                        padding
                    >
                        {education.map((item, index) => (
                            <div
                                key={item.name}
                                style={{ marginBottom: index === education.length - 1 ? 0 : 30 }}
                            >
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="subtitle1" gutterBottom>{item.startDate} - {item.endDate}</Typography>
                                <Typography variant="subtitle1">{item.info}</Typography>
                                {(item.completedCourses && item.completedCourses.length > 0) && (
                                    <div className={classes.courses}>
                                        <Typography variant="subtitle1">Completed Courses</Typography>
                                        <ul className={classes.list}>
                                            {item.completedCourses.map((item, i) => (
                                                <li key={`education${index}completed${i}`}>
                                                    <Typography variant="subtitle1">{item}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {(item.currentCourses && item.currentCourses.length > 0) && (
                                    <div className={classes.courses}>
                                        <Typography variant="subtitle1">Current Courses</Typography>
                                        <ul className={classes.list}>
                                            {item.currentCourses.map((item, i) => (
                                                <li key={`education${index}current${i}`}>
                                                    <Typography variant="subtitle1">{item}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ColoredCard>
                </Grid>

                <Grid item xs={12}>
                    <ColoredCard
                        color="primary"
                        icon={<Computer />}
                        title="Skills"
                        padding
                    >
                        <Grid container>
                            {skills.map((item, index) => (
                                <Grid item xs={12} lg={6} key={item.type}>
                                    <div style={{ marginBottom: index === skills.length - 1 ? 0 : 30 }}>
                                        <Typography variant="h6" align="center" gutterBottom>{item.type}</Typography>
                                        <Hidden mdUp>
                                            <div className={classes.container}>
                                                {item.skills.map((item) => (
                                                    <Skill color="secondary" title={item} key={item} />
                                                ))}
                                            </div>
                                        </Hidden>
                                        <Hidden smDown>
                                            <div className={classes.extraMargin}>
                                                <Grid
                                                    container
                                                    spacing={24}
                                                    className={classes.grid}
                                                >
                                                    {item.skills.map((item) => (
                                                        <Grid item xs={4} key={item}>
                                                            <Skill color="secondary" title={item} icon />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </div>
                                        </Hidden>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </ColoredCard>
                </Grid>
            </Grid>
        );
    }
}

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndexPage);
