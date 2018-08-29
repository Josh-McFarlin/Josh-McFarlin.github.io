import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%'
    },
    paper: {
        padding: theme.spacing.unit * 2
    }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
        }
    }
};

class TagSelector extends React.Component {
    render() {
        const { classes, selected, handler, children } = this.props;

        return (
            <Paper className={classes.paper}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">Filter Projects By Tags</InputLabel>
                    <Select
                        multiple
                        value={selected}
                        onChange={handler}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        { children }
                    </Select>
                </FormControl>
            </Paper>
        );
    }
}

TagSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
};

export default withStyles(styles, { withTheme: true })(TagSelector);