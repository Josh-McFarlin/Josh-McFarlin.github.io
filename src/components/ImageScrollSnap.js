import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const size = 350;
const styles = theme => ({
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
    }
});

class ImageScrollSnap extends React.Component {
    render() {
        const { classes, images } = this.props;

        return (
            <div>
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