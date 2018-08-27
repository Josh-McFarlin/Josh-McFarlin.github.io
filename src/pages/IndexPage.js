import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { School, Computer } from '@material-ui/icons';

import ColoredCard from '../components/ColoredCard';
import Skill from '../components/Skill';

import { education, skills } from '../data';


const styles = theme => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

class IndexPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <ColoredCard
                        color="primary"
                        icon={<School/>}
                        title="Education"
                        padding
                    >
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
                    <ColoredCard
                        color="primary"
                        icon={<Computer/>}
                        title="Skills"
                        padding
                    >
                        {
                            skills.map((item, index) =>
                                <div
                                    key={item.type}
                                    style={{ marginBottom: index === education.length - 1 ? 0 : 30 }}
                                >
                                    <Typography variant="title" gutterBottom>{item.type}</Typography>
                                    <div className={classes.container}>
                                        {
                                            item.skills.map((item) =>
                                                <Skill color="primary" title={item} key={item} />
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
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