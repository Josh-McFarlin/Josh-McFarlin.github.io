import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';

import ColoredCard from '../components/ColoredCard';
import ImageScroll from '../components/ImageScroll';
import ImageScrollSnap from '../components/ImageScrollSnap';


const styles = {
    card: {
        width: '100%',
        position: 'relative'
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        width: '100%',
        height: 350,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        cursor: 'pointer'
    },
    info: {
        width: '100%'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
};

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
        const { classes, info } = this.props;

        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <ColoredCard
                    title={info.title}
                    className={classes.card}
                    color="primary"
                >
                    <div className={classes.content}>
                        {this.state.expanded && info.images.length > 1 ? (
                            <div>
                                <Hidden smDown implementation="css">
                                    <ImageScroll images={info.images} onClick={this.handleClick} />
                                </Hidden>

                                <Hidden mdUp implementation="css">
                                    {CSS.supports('scroll-snap-align: start') || CSS.supports('scroll-snap-coordinate: left') ? (
                                        <ImageScrollSnap images={info.images} onClick={this.handleClick} />
                                    ) : (
                                        <ImageScroll images={info.images} onClick={this.handleClick} />
                                    )}
                                </Hidden>
                            </div>
                        ) : (
                            <div
                                className={classes.media}
                                style={{
                                    backgroundImage: `url("/static/images/projects/${info.images[0]}")`
                                }}
                                onClick={this.handleClick}
                            />
                        )}

                        {this.state.expanded && (
                            <div className={classes.info}>
                                <CardContent>
                                    <Typography variant="subtitle1" paragraph>{info.description}</Typography>
                                </CardContent>

                                {(info.link && info.link.url) && (
                                    <div className={classes.actions}>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                color="secondary"
                                                variant="contained"
                                                href={info.link.url}
                                                target="_blank"
                                            >{info.link.text}</Button>
                                        </CardActions>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </ColoredCard>
            </ClickAwayListener>
        );
    }
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired
};

export default withStyles(styles)(Project);
