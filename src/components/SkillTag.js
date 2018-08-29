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
        cursor: 'pointer',
        width: 150,
        height: 40,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'inherit',
        textAlign: 'center',
        userSelect: 'none'
    },
    titleHolder: {
        marginLeft: 15
    },
    countHolder: {
        width: '30%',
        height: '100%',
        textAlign: 'center',
        background: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '1px solid white'
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
        const { classes, color, title, clickHandler, selected, count } = this.props;

        const boxClassName = classNames(classes.box, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        }, selected ? classes.active : null);

        return (
            <div className={boxClassName} onClick={clickHandler}>
                <div className={classes.titleHolder}>
                    <Typography variant="subheading" className={classes.text}>{title}</Typography>
                </div>
                <div className={classes.countHolder}>
                    <Typography variant="subheading" color="inherit">{count}</Typography>
                </div>
            </div>
        );
    }
}

SkillTag.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary']).isRequired,
    title: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    count: PropTypes.number
};

export default withStyles(styles, { withTheme: true })(SkillTag);