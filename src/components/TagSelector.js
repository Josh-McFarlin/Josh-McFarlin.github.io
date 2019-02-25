import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        display: 'flex'
    },
    clear: {
        marginLeft: 20
    }
});

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 225
        }
    }
};

class TagSelector extends React.Component {
    render() {
        const { classes, selected, selectHandler, clearHandler, children } = this.props;

        return (
            <Paper className={classes.paper}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="select-multiple-checkbox">Filter Projects By Tags</InputLabel>
                    <Select
                        multiple
                        value={selected}
                        onChange={selectHandler}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        { children }
                    </Select>
                </FormControl>
                <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={clearHandler}
                    className={classes.clear}
                >Clear</Button>
            </Paper>
        );
    }
}

TagSelector.propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    selectHandler: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
};

export default withStyles(styles, { withTheme: true })(TagSelector);
