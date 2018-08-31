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
        backgroundPosition: 'top'
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
                        {
                            this.state.expanded && this.props.images.length > 1 ? (
                                <div>
                                    <Hidden smDown>
                                        <ImageScroll images={this.props.images} />
                                    </Hidden>

                                    <Hidden mdUp>
                                        {
                                            CSS.supports('scroll-snap-align: start') || CSS.supports('scroll-snap-coordinate: left') ? (
                                                <ImageScrollSnap images={this.props.images}/>
                                            ) : (
                                                <ImageScroll images={this.props.images}/>
                                            )
                                        }
                                    </Hidden>
                                </div>
                            ) : (
                                <div
                                    className={classes.media}
                                    style={{
                                        backgroundImage: 'url("' + process.env.PUBLIC_URL + '/static/images/projects/' + this.props.images[0] + '")'
                                    }}
                                />
                            )
                        }

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
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlText: PropTypes.string.isRequired,
    tags: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(Project);