import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const size = 350;
const styles = theme => ({
    root: {
        position: 'relative',
        cursor: 'pointer'
    },
    container: {
        position: 'relative',
        width: '100%',
        height: size,
        overflowX: 'scroll',
        overflowY: 'hidden',
        "@supports (scroll-snap-type: mandatory)": {
            scrollSnapType: 'mandatory'
        },
        "@supports (scroll-snap-type: x mandatory)": {
            scrollSnapType: 'x mandatory'
        },
        "@supports (scroll-behavior: smooth)": {
            scrollBehavior: 'smooth'
        }
    },
    allImages: {
        display: 'flex'
    },
    imageDiv: {
        width: '100%',
        height: size,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            "@supports (scroll-snap-align: start)": {
                scrollSnapAlign: 'start'
            },
            "@supports (scroll-snap-coordinate: left)": {
                scrollSnapCoordinate: 'left'
            }
        }
    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 3,
        width: 50,
        height: 50,
        opacity: 1,
        animation: 'fadeOut 2s 3s linear forwards'
    },
    "@keyframes fadeOut": {
        to: {
            opacity: 0
        }
    }
});

class ImageScrollSnap extends React.Component {
    render() {
        const { classes, images, ...other } = this.props;

        return (
            <div className={classes.root} {...other}>
                <img src={process.env.PUBLIC_URL + '/static/images/swipe.svg'} className={classes.icon} alt="" />
                <div className={classes.container}>
                    <div
                        className={classes.allImages}
                        onTouchStart={this.handleTouchStart}
                        onTouchMove={this.handleTouchMove}
                        onTouchEnd={this.handleTouchEnd}
                        style={{
                            width: `${100 * images.length}%`
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
            </div>
        );
    }
}

ImageScrollSnap.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(ImageScrollSnap);