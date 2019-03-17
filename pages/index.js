import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { Person, School, Computer, Work as WorkIcon } from '@material-ui/icons';

import ColoredCard from '../src/components/ColoredCard';
import Skill from '../src/components/Skill';
import { personal, work, education, skills } from '../src/data';


const styles = (theme) => ({
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
    category: {
        padding: '0 !important',
        "&:not(:last-of-type)": {
            marginBottom: `${theme.spacing.unit * 2}px !important`
        }
    },
    categoryGrid: {
        padding: `0 0 ${theme.spacing.unit}px 0 !important`
    },
    extraMargin: {
        margin: '0 50px'
    },
    singleType: {
        "&:not(:last-of-type)": {
            marginBottom: theme.spacing.unit * 2
        }
    },
    courses: {
        marginTop: theme.spacing.unit
    },
    list: {
        margin: 0
    }
});

class IndexPage extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                spacing={24}
                className={classes.grid}
            >
                <Grid item xs={12} className={classes.category}>
                    <ColoredCard
                        color="primary"
                        icon={<Person />}
                        title="About Me"
                        padding
                    >
                        <Typography variant="subtitle1">{personal.about}</Typography>
                    </ColoredCard>
                </Grid>

                <Grid item xs={12} className={classes.category}>
                    <ColoredCard
                        color="primary"
                        icon={<WorkIcon />}
                        title="Work Experience"
                        padding
                    >
                        {work.map((item, index) => (
                            <div
                                key={item.company}
                                style={{ marginBottom: index === work.length - 1 ? 0 : 30 }}
                            >
                                <Typography variant="h6">{item.position} @ {item.company}</Typography>
                                <Typography variant="body2" gutterBottom>{item.startDate} - {item.endDate} in {item.location}</Typography>
                                {(item.description && item.description.length > 0) && (
                                    <ul className={classes.list}>
                                        {item.description.map((info, i) => (
                                            <li key={`education${index}completed${i}`}>
                                                <Typography variant="subtitle1">{info}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ColoredCard>
                </Grid>

                <Grid item xs={12} className={classes.category}>
                    <ColoredCard
                        color="primary"
                        icon={<School />}
                        title="Education"
                        padding
                    >
                        {education.map((item, index) => (
                            <div
                                key={item.name}
                                className={classes.singleType}
                            >
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="subtitle1" gutterBottom>{item.startDate} - {item.endDate}</Typography>
                                <Typography variant="subtitle1">{item.info}</Typography>
                                {(item.completedCourses && item.completedCourses.length > 0) && (
                                    <div className={classes.courses}>
                                        <Typography variant="subtitle1">Completed Courses</Typography>
                                        <ul className={classes.list}>
                                            {item.completedCourses.map((info, i) => (
                                                <li key={`education${index}completed${i}`}>
                                                    <Typography variant="subtitle1">{info}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {(item.currentCourses && item.currentCourses.length > 0) && (
                                    <div className={classes.courses}>
                                        <Typography variant="subtitle1">Current Courses</Typography>
                                        <ul className={classes.list}>
                                            {item.currentCourses.map((info, i) => (
                                                <li key={`education${index}current${i}`}>
                                                    <Typography variant="subtitle1">{info}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </ColoredCard>
                </Grid>

                <Grid item xs={12} className={classes.category}>
                    <ColoredCard
                        color="primary"
                        icon={<Computer />}
                        title="Skills"
                        padding
                    >
                        <Grid container>
                            {skills.map((item) => (
                                <Grid item xs={12} lg={6} key={item.type} className={classes.singleType}>
                                    <Typography variant="h6" align="center" gutterBottom>{item.type}</Typography>
                                    <Hidden mdUp>
                                        <div className={classes.container}>
                                            {item.skills.map((info) => (
                                                <Skill color="secondary" info={info} key={info.name} />
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
                                                {item.skills.map((info) => (
                                                    <Grid item xs={4} key={info.name}>
                                                        <Skill color="secondary" info={info} icon />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </div>
                                    </Hidden>
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

export default withStyles(styles, { withTheme: true })(IndexPage);
