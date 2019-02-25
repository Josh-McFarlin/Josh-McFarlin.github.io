import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';


const size = 350;
const styles = {
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
};

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

        const length = this.props.images.length;

        this.setState(prevState => ({
            current: (((prevState.current - 1) % length) + length) % length
        }));
    }

    goRight(e) {
        e.stopPropagation();

        const length = this.props.images.length;

        this.setState(prevState => ({
            current: (prevState.current + 1) % length
        }));
    }

    goTo(index, e) {
        e.stopPropagation();

        this.setState({
            current: index
        });
    }

    render() {
        const { classes, images, ...rest } = this.props;

        return (
            <div className={classes.root} {...rest}>
                <div className={classes.container}>
                    <div className={`${classes.arrowHolder} ${classes.alignLeft}`}>
                        <Fab
                            color="secondary"
                            aria-label="Go Left"
                            onClick={this.goLeft}
                            className={classes.button}
                        >
                            <ChevronLeft />
                        </Fab>
                    </div>

                    <div className={`${classes.arrowHolder} ${classes.alignRight}`}>
                        <Fab
                            color="secondary"
                            aria-label="Go Right"
                            onClick={this.goRight}
                            className={classes.button}
                        >
                            <ChevronRight />
                        </Fab>
                    </div>

                    <div
                        className={classes.allImages}
                        style={{
                            width: `${100 * images.length}%`,
                            transform: `translate(${-100 * this.state.current / images.length}%)`
                        }}
                    >
                        {images.map((image) => (
                            <div
                                className={classes.imageDiv}
                                style={{
                                    backgroundImage: `url("/static/images/projects/${image}")`
                                }}
                                key={image}
                            />
                        ))}
                    </div>
                </div>

                <div className={classes.circlesHolder}>
                    {images.map((item, index) => (
                        <div
                            className={classes.circle}
                            key={index}
                            style={{
                                backgroundColor: index === this.state.current ? 'black' : 'white'
                            }}
                            onClick={this.goTo.bind(this, index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

ImageScroll.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
};

export default withStyles(styles)(ImageScroll);
