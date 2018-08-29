import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "@material-ui/core/utils/helpers";
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const styles = theme => ({
    box: {
        borderRadius: 20,
        margin: 5,
        padding: '5px 10px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    text: {
        color: 'inherit',
        textAlign: 'center'
    },
    image: {
        width: 50,
        height: 50,
        margin: 10
    },
    imageHolder: {
        background: 'white',
        lineHeight: 0,
        borderRadius: 5
    },
    colorPrimary: {
        background: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    colorSecondary: {
        background: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
    colorError: {
        background: theme.palette.error.main,
        borderColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    }
});

class Skill extends React.Component {
    render() {
        const { classes, color, title, icon } = this.props;

        const boxClassName = classNames(classes.box, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        });

        return (
            <div>
                <Hidden mdUp>
                    <div className={boxClassName}>
                        <Typography variant="subheading" className={classes.text}>{title}</Typography>
                    </div>
                </Hidden>

                <Hidden smDown>
                    <div className={boxClassName}>
                        {
                            icon &&
                                <div className={classes.imageHolder}>
                                    <img
                                        src={window.location.origin + '/static/images/skills/' + title.split(' ')[0].toLowerCase() + '.png'}
                                        alt={title}
                                        className={classes.image}
                                    />
                                </div>
                        }
                        <Typography variant="title" className={classes.text}>{title}</Typography>
                    </div>
                </Hidden>
            </div>
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(Skill);