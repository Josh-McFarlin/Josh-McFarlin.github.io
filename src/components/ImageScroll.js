import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

import DynamicImage from '../components/DynamicImage';


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
    imageHolder: {
        width: '100%',
        height: size
    },
    imageDiv: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
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

class ImageScroll extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        };
    }

    goLeft = (e) => {
        e.stopPropagation();

        const length = this.props.images.length;

        this.setState(prevState => ({
            current: (((prevState.current - 1) % length) + length) % length
        }));
    };

    goRight = (e) => {
        e.stopPropagation();

        const length = this.props.images.length;

        this.setState(prevState => ({
            current: (prevState.current + 1) % length
        }));
    };

    goTo = (index, e) => {
        e.stopPropagation();

        this.setState({
            current: index
        });
    };

    render() {
        const { classes, images, onClick } = this.props;

        return (
            <div className={classes.root} onClick={onClick}>
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
                                className={classes.imageHolder}
                                key={image.imgSrc}
                            >
                                <DynamicImage
                                    className={classes.imageDiv}
                                    info={image}
                                />
                            </div>
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
                            onClick={(e) => this.goTo(index, e)}
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
