import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
    svg: {
        width: '100%',
        height: 300
    },
    textLine: {
        fill: 'none',
        strokeDasharray: 300,
        animation: 'dash 300s linear alternate infinite',
        stroke: theme.palette.primary.main,
        strokeWidth: 5,
        fontSize: 300,
        fontFamily: theme.typography.fontFamily,
        [theme.breakpoints.down('sm')]: {
            fontSize: 150
        }
    },
    "@keyframes dash": {
        to: {
            strokeDashoffset: 50000
        }
    }
});

class NotFoundPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <svg className={classes.svg}>
                    <text
                        x="50%"
                        y="50%"
                        alignmentBaseline="middle"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className={classes.textLine}
                    >404</text>
                </svg>
                <Typography align="center" variant="headline" color="primary" gutterBottom>Page Not Found :(</Typography>
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NotFoundPage);