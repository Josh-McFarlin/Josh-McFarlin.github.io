import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import { Brightness2, Brightness5 } from '@material-ui/icons';


const styles = theme => ({
    colorSwitchBase: {
        color: '#ffc729',
        '&$colorChecked': {
            color: '#3c789b',
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
            dark: false,
            anchorEl: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            dark: !this.state.dark
        });

        this.props.toggle();
    };

    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <Switch
                    checked={this.state.dark}
                    onChange={this.handleChange}
                    onMouseEnter={this.handlePopoverOpen}
                    onMouseLeave={this.handlePopoverClose}
                    icon={<Brightness5 />}
                    checkedIcon={<Brightness2 />}
                    value="dark"
                    classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar
                    }}
                />
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
                    <Typography>Change theme to {this.state.dark ? 'light' : 'dark'}.</Typography>
                </Popover>
            </div>
        );
    }
}

ShadeSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(ShadeSwitch);