import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
            margin: 50,
        }
    },
    header: {
        height: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    icon: {
        width: 'auto',
        height: '100%',
        marginRight: 24
    }
});

class ColoredCard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <div className={classes.header}>
                    {
                        this.props.icon &&
                            React.cloneElement(this.props.icon, {className: classes.icon})
                    }
                    <Typography variant="headline">{this.props.title}</Typography>
                </div>

                <CardContent>
                    { this.props.children }
                </CardContent>
            </Card>
        );
    }
}

ColoredCard.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default withStyles(styles, { withTheme: true })(ColoredCard);