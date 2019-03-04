import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "@material-ui/core/utils/helpers";
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import DynamicImage from '../components/DynamicImage';


const styles = theme => ({
    box: {
        borderRadius: 20,
        [theme.breakpoints.down('sm')]: {
            margin: 5,
            padding: '5px 10px'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 150,
            justifyContent: 'center'
        }
    },
    text: {
        color: 'inherit',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: 5
        }
    },
    image: {
        width: '100%'
    },
    imageHolder: {
        width: 60,
        height: 60,
        background: 'white',
        borderRadius: 5,
        display: 'flex;',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    colorPrimary: {
        background: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    colorSecondary: {
        background: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
});

class Skill extends React.Component {
    render() {
        const { classes, color, info, icon } = this.props;

        const boxClassName = classNames(classes.box, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        });

        return (
            <React.Fragment>
                <Hidden smDown>
                    <div className={boxClassName}>
                        {(icon) && (
                            <div className={classes.imageHolder}>
                                <DynamicImage
                                    className={classes.image}
                                    info={info.image}
                                />
                            </div>
                        )}
                        <Typography variant="h6" className={classes.text}>{info.name}</Typography>
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <div className={boxClassName}>
                        <Typography variant="subtitle1" className={classes.text}>{info.name}</Typography>
                    </div>
                </Hidden>
            </React.Fragment>
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary']).isRequired,
    info: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.object
    }).isRequired,
    icon: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(Skill);
