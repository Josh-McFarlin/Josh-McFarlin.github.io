import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "@material-ui/core/utils/helpers";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    box: {
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: theme.palette.color,
        borderRadius: 20,
        margin: 5,
        padding: '5px 10px',
        background: theme.palette.color,
        '&:hover': {
            borderWidth: 2
        }
    },
    text: {
        color: 'inherit'
    },
    colorPrimary: {
        background: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    },
    colorSecondary: {
        background: theme.palette.secondary.contrastText,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
    },
    colorError: {
        background: theme.palette.error.contrastText,
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
    }
});

class Skill extends React.Component {
    render() {
        const { classes, color, title, ...other } = this.props;

        const boxClassName = classNames(classes.box, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        });

        return (
            <div className={boxClassName} {...other}>
                <Typography variant="subheading" className={classes.text}>{title}</Typography>
            </div>
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']).isRequired,
    title: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(Skill);