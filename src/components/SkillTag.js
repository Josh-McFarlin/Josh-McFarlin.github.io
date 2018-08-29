import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "@material-ui/core/utils/helpers";
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    box: {
        borderRadius: 20,
        margin: 5,
        padding: '5px 10px',
        cursor: 'pointer',
        width: 120,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    text: {
        color: 'inherit',
        textAlign: 'center',
        userSelect: 'none'
    },
    colorPrimary: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    colorSecondary: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    colorError: {
        background: theme.palette.error.main,
        color: theme.palette.error.contrastText
    },
    active: {
        background: theme.palette.action.selected,
        color: theme.palette.primary.contrastText
    }
});

class SkillTag extends React.Component {
    render() {
        const { classes, color, title, clickHandler, selected } = this.props;

        const boxClassName = classNames(classes.box, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        }, selected ? classes.active : null);

        return (
            <div className={boxClassName} onClick={clickHandler}>
                <Typography variant="subheading" className={classes.text}>{title}</Typography>
            </div>
        );
    }
}

SkillTag.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary']).isRequired,
    title: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(SkillTag);