import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";


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
    hintHolder: {
        position: 'absolute',
        width: "50%",
        bottom: 10,
        left: 0,
        right: 0,
        margin: 'auto',
        borderRadius: 10,
        zIndex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        animation: 'fadeOut 2s 3s linear forwards'
    },
    hint: {
        opacity: 1,
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        fontWeight: 300
    },
    "@keyframes fadeOut": {
        to: {
            opacity: 0
        }
    }
});

class ImageScrollSnap extends React.PureComponent {
    render() {
        const { classes, images, onClick } = this.props;

        return (
            <div className={classes.root} onClick={onClick}>
                <div className={classes.hintHolder}>
                    <Typography variant="h6" className={classes.hint}>🡐 Swipe 🡒</Typography>
                </div>
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
            </div>
        );
    }
}

ImageScrollSnap.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(ImageScrollSnap);
