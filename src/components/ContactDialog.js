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
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import { contact } from "../data";


const styles = {
    buttonHolder: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        padding: '10px 20px',
        margin: 15
    },
    flex: {
        flex: 1,
    },
    listItem: {
        pointerEvents: 'auto'
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ContactDialog extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Hidden smUp>
                    <Dialog
                        fullScreen
                        open={this.props.open}
                        onClose={this.props.handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" color="inherit" className={classes.flex}>Contact Me</Typography>
                                <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            {contact.map((item) => (
                                <ListItem
                                    button
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    key={item.type}
                                >
                                    <ListItemText
                                        primary={item.type}
                                        secondary={item.info}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Dialog>
                </Hidden>
                <Hidden xsDown>
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
                                {contact.map((item) => (
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
                                ))}
                            </List>

                            <div className={classes.buttonHolder}>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    onClick={this.props.handleClose}
                                    className={classes.button}
                                >Close</Button>
                            </div>
                        </div>
                    </Dialog>
                </Hidden>
            </React.Fragment>
        );
    }
}

ContactDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(ContactDialog);
