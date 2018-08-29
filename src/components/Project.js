import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ColoredCard from '../components/ColoredCard';


const styles = theme => ({
    card: {
        width: '100%',
        position: 'relative',
        cursor: 'pointer'
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
        width: '100%'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
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
                <ColoredCard
                    title={this.props.title}
                    className={classes.card}
                    color="primary"
                    onClick={this.handleClick}
                >
                    <div className={classes.content}>
                        <div
                            className={classes.media}
                            style={{
                                backgroundImage: 'url("' + window.location.origin + '/static/images/projects/' + this.props.image + '")'
                            }}
                        />

                        {
                            this.state.expanded &&
                                <div className={classes.info}>
                                    <CardContent>
                                        <Typography variant="subheading" paragraph>{this.props.description}</Typography>
                                    </CardContent>

                                    <div className={classes.actions}>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                color="secondary"
                                                variant="contained"
                                                href={this.props.url}
                                            >{this.props.urlText}</Button>
                                        </CardActions>
                                    </div>
                                </div>
                        }
                    </div>
                </ColoredCard>
            </ClickAwayListener>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlText: PropTypes.string.isRequired,
    tags: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(Project);