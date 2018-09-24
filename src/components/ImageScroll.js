import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { ChevronLeft, ChevronRight } from '@material-ui/icons';


const size = 350;
const styles = theme => ({
    root: {
        cursor: 'pointer'
    },
    container: {
        position: 'relative',
        width: '100%',
        height: size,
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    allImages: {
        display: 'flex',
        transition: 'transform 1s ease'
    },
    imageDiv: {
        width: '100%',
        height: size,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    arrowHolder: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        margin: '0 10px'
    },
    alignLeft: {
        position: 'absolute',
        left: 0
    },
    alignRight: {
        position: 'absolute',
        right: 0
    },
    circlesHolder: {
        width: '100%',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default'
    },
    circle: {
        width: 10,
        height: 10,
        margin: 5,
        borderRadius: '50%',
        border: '2px solid black',
        background: 'white',
        cursor: 'pointer'
    }
});

class ImageScroll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        };

        this.goLeft = this.goLeft.bind(this);
        this.goRight = this.goRight.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    goLeft(e) {
        e.stopPropagation();

        let current = this.state.current - 1;
        let length = this.props.images.length;

        this.setState({
            current: ((current % length) + length) % length
        });
    }

    goRight(e) {
        e.stopPropagation();

        this.setState({
            current: (this.state.current + 1) % this.props.images.length
        });
    }

    goTo(index, e) {
        e.stopPropagation();

        this.setState({
            current: index
        });
    }

    render() {
        const { classes, images, ...other } = this.props;

        return (
            <div className={classes.root} {...other}>
                <div className={classes.container}>
                    <div className={`${classes.arrowHolder} ${classes.alignLeft}`}>
                        <Button
                            variant="fab"
                            color="secondary"
                            aria-label="Go Left"
                            onClick={this.goLeft}
                            className={classes.button}
                        >
                            <ChevronLeft/>
                        </Button>
                    </div>

                    <div className={`${classes.arrowHolder} ${classes.alignRight}`}>
                        <Button
                            variant="fab"
                            color="secondary"
                            aria-label="Go Right"
                            onClick={this.goRight}
                            className={classes.button}
                        >
                            <ChevronRight/>
                        </Button>
                    </div>

                    <div
                        className={classes.allImages}
                        style={{
                            width: `${100 * images.length}%`,
                            transform: `translate(${-100 * this.state.current / images.length}%)`
                        }}
                    >
                        {
                            images.map((image) =>
                                <div
                                    className={classes.imageDiv}
                                    style={{
                                        backgroundImage: 'url("' + process.env.PUBLIC_URL + '/static/images/projects/' + image + '")'
                                    }}
                                    key={image}
                                />
                            )
                        }
                    </div>
                </div>

                <div className={classes.circlesHolder}>
                    {
                        images.map((item, index) =>
                            <div
                                className={classes.circle}
                                key={index}
                                style={{
                                    backgroundColor: index === this.state.current ? 'black' : 'white'
                                }}
                                onClick={this.goTo.bind(this, index)}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

ImageScroll.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(ImageScroll);