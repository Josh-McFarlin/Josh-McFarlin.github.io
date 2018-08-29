import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { Brightness2, Brightness7 } from '@material-ui/icons';


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
            anchorEl: null
        };

        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
    }

    handlePopoverOpen(e) {
        this.setState({
            anchorEl: e.currentTarget
        });
    };

    handlePopoverClose() {
        this.setState({
            anchorEl: null
        });
    };

    render() {
        const { classes, state, toggle } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <Switch
                    checked={state}
                    onChange={toggle}
                    onMouseEnter={this.handlePopoverOpen}
                    onMouseLeave={this.handlePopoverClose}
                    icon={<Brightness7 />}
                    checkedIcon={<Brightness2 />}
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
                        disableRestoreFocus
                    >
                        <Typography>Change theme to {state ? 'light' : 'dark'}.</Typography>
                    </Popover>
                </Hidden>
            </div>
        );
    }
}

ShadeSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(ShadeSwitch);