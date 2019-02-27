import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from "@material-ui/core/utils/helpers";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    svg: {
        width: 50,
        height: 50,
        margin: 5,
        [theme.breakpoints.up('md')]: {
            width: 70,
            height: 70,
            margin: 50
        }
    },
    header: {
        height: 75,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        background: theme.palette.color
    },
    text: {
        color: 'inherit'
    },
    icon: {
        width: 'auto',
        height: '100%',
        marginRight: 24
    },
    aTag: {
        width: 'auto',
        height: '100%',
        color: 'unset'
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    colorError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText
    }
});

class ColoredCard extends React.PureComponent {
    render() {
        const { classes, color, padding, icon, title, subheader, children } = this.props;

        const headerClassName = classNames(classes.header, {
            [classes[`color${capitalize(color)}`]]: color !== 'default',
        });

        return (
            <Card>
                <div className={headerClassName}>
                    {(icon) && (
                        <a href={`#${title}`} className={classes.aTag}>
                            { React.cloneElement(icon, {className: classes.icon}) }
                        </a>
                    )}
                    <div>
                        <Typography variant="h5" className={classes.text} id={title}>{title}</Typography>
                        {(subheader) && (
                            <Typography variant="body2" color="textSecondary" className={classes.text}>{subheader}</Typography>
                        )}
                    </div>
                </div>

                {(padding) ? (
                    <CardContent>
                        { children }
                    </CardContent>
                ) : (
                    <div>
                        { children }
                    </div>
                )}
            </Card>
        );
    }
}

ColoredCard.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']).isRequired,
    padding: PropTypes.bool,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    children: PropTypes.any.isRequired
};

export default withStyles(styles, { withTheme: true })(ColoredCard);
