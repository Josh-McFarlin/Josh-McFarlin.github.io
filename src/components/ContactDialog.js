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
    },
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ContactDialog extends React.Component {
    render() {
        const { classes, open, handleClose, contact } = this.props;

        return (
            <div>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar
                            className={classes.appBar}
                        >
                            <Toolbar>
                                <Typography variant="title" color="inherit" className={classes.flex}>Contact Me</Typography>
                                <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <List>
                            {
                                contact.map((item) =>
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
                    </Dialog>
                </Hidden>
                <Hidden only={['xs']}>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        fullWidth
                    >
                        <DialogTitle>Contact Me</DialogTitle>
                        <div>
                            <List>
                                {
                                    contact.map((item) =>
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
                                    onClick={handleClose}
                                    className={classes.button}
                                >Close</Button>
                            </div>
                        </div>
                    </Dialog>
                </Hidden>
            </div>
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