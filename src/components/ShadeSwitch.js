import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { Brightness2, Brightness7 } from '@material-ui/icons';

import ThemeContext from "../ThemeContext";


const styles = theme => ({
    colorSwitchBase: {
        color: '#ffc729',
        '&$colorChecked': {
            color: '#153f57',
            '& + $colorBar': {
                backgroundColor: '#ebebeb',
            }
        }
    },
    colorChecked: {},
    colorBar: {},
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing.unit
    },
});

class ShadeSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            display: false
        };

        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
    }

    handlePopoverOpen(e) {
        this.setState({
            anchorEl: e.currentTarget,
            display: true
        });
    };

    handlePopoverClose() {
        this.setState({
            anchorEl: null,
            display: false
        });
    };

    render() {
        const { classes, state } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <ThemeContext.Consumer>
                {({useLight, toggleTheme}) =>
                    <React.Fragment>
                        <Switch
                            checked={state}
                            onChange={toggleTheme}
                            onMouseEnter={this.handlePopoverOpen}
                            onMouseLeave={this.handlePopoverClose}
                            icon={<Brightness7/>}
                            checkedIcon={<Brightness2/>}
                            value="dark"
                            classes={{
                                switchBase: classes.colorSwitchBase,
                                checked: classes.colorChecked,
                                bar: classes.colorBar
                            }}
                        />
                        <Hidden smDown>
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                    paper: classes.paper,
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center'
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center'
                                }}
                                onClose={this.handlePopoverClose}
                            >
                                <Typography>Change to {useLight ? 'dark' : 'light'} theme</Typography>
                            </Popover>
                        </Hidden>
                    </React.Fragment>
                }
            </ThemeContext.Consumer>
        );
    }
}

ShadeSwitch.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShadeSwitch);
