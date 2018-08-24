import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from '@material-ui/core/Slide';


const styles = {
    card: {
        width: '100%'
    },
    buttonHolder: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        padding: '10px 20px',
        margin: 15
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ContactDialog extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.handleClose}
                fullWidth
            >
                <DialogTitle>Contact Me</DialogTitle>
                <div>
                    <List>
                        {
                            this.props.contact.map((item) =>
                                <ListItem
                                    button
                                    key={item.type}
                                    component="a"
                                    href={item.link}
                                >
                                    <ListItemText
                                        primary={item.type}
                                        secondary={item.info}
                                    />
                                </ListItem>
                            )
                        }
                    </List>

                    <div className={classes.buttonHolder}>
                        <Button
                            size="small"
                            color="primary"
                            onClick={this.props.handleClose}
                            className={classes.button}
                        >Close</Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

ContactDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.any,
    contact: PropTypes.array.isRequired
};

export default withStyles(styles)(ContactDialog);