import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const styles = theme => ({
    card: {
        width: '100%',
        position: 'relative',
        cursor: 'pointer'
    },
    header: {
        height: 50,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        width: '100%',
        height: 350,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    info: {
        width: '100%',
        height: 350
    },
    actions: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickAway = this.handleClickAway.bind(this);
    }

    handleClick() {
        this.setState({
            expanded: !this.state.expanded
        });
    };

    handleClickAway() {
        this.setState({
            expanded: false
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <Card className={classes.card} onClick={this.handleClick}>
                    <CardHeader
                        title={this.props.title}
                        classes={{
                            root: classes.header
                        }}
                    />

                    <div className={classes.content}>
                        <div
                            className={classes.media}
                            style={{
                                backgroundImage: 'url("' + window.location.origin + '/static/images/' + this.props.image + '")'
                            }}
                        />

                        <div
                            className={classes.info}
                            style={{
                                display: this.state.expanded ? 'block' : 'none'
                            }}
                        >
                            <CardContent>
                                <Typography variant="subheading" paragraph>{this.props.description}</Typography>
                            </CardContent>

                            <CardActions className={classes.actions}>
                                <Button size="small" color="primary" href={this.props.url}>{this.props.urlText}</Button>
                            </CardActions>
                        </div>
                    </div>
                </Card>
            </ClickAwayListener>
        );
    }
}

Project.propTypes = {
    multiplier: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlText: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(Project);