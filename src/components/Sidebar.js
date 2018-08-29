import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';

import ContactMail from '@material-ui/icons/ContactMail';

import ContactDialog from '../components/ContactDialog';

import { personal, links } from "../data";


const drawerWidth = 350;
const appBarHeight = 56;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            display: 'flex'
        }
    },
    drawerPaper: {
        position: 'relative',
        background: 'none',
        pointerEvents: 'none',
        height: '100vh',
        width: drawerWidth,
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80vw'
        }
    },
    sidebar: {
        width: drawerWidth,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80vw'
        }
    },
    appBar: {
        height: appBarHeight
    },
    imageHolder: {
        width: '100%',
        height: 0,
        maxHeight: drawerWidth,
        flex: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            maxHeight: '80vw'
        }
    },
    info: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    link: {
        textDecoration: 'none',
        pointerEvents: 'auto',
        color: 'initial'
    },
    content: {
        backgroundColor: theme.palette.background.default,
        overflowX: 'hidden',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        height: '100%'
    },
    padding: {
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.down('sm')]: {
            marginBottom: appBarHeight
        }
    },
    centerText: {
        textAlign: 'center'
    }
});

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false,
            contactOpen: false
        };

        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleContactOpen = this.handleContactOpen.bind(this);
        this.handleContactClose = this.handleContactClose.bind(this);
    }

    handleDrawerToggle() {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        });
    };

    handleDrawerOpen() {
        this.setState({
            mobileOpen: true
        });
    };

    handleDrawerClose() {
        this.setState({
            mobileOpen: false
        });
    };

    handleContactOpen() {
        this.setState({
            contactOpen: true
        });
    };

    handleContactClose() {
        this.setState({
            contactOpen: false
        });
    };

    render() {
        const { classes, children } = this.props;

        const list = (
            <List
                disablePadding
                className={classes.sidebar}
            >
                <div
                    className={classes.imageHolder}
                    style={{
                        backgroundImage: "url('" + window.location.origin + personal.image + "')"
                    }}
                />

                <div className={classes.info}>
                    <Typography variant="headline" className={classes.centerText}>{personal.name}</Typography>
                    <Typography variant="subheading" className={classes.centerText}>{personal.occupation}</Typography>
                </div>

                {
                    links.map((item) =>
                        item.link.startsWith("/") ? (
                            <Link
                                to={item.link}
                                onClick={this.handleDrawerClose}
                                className={classes.link}
                                key={item.title}
                            >
                                <ListItem
                                    button
                                    key={item.title}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </Link>
                        ) : (
                            <ListItem
                                button
                                component="a" href={item.link}
                                className={classes.link}
                                key={item.title}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        )
                    )
                }

                <ListItem
                    button
                    onClick={this.handleContactOpen}
                    className={classes.link}
                >
                    <ListItemIcon>
                        <ContactMail />
                    </ListItemIcon>
                    <ListItemText primary="Contact Me" />
                </ListItem>

                <ContactDialog open={this.state.contactOpen} handleClose={this.handleContactClose} />
            </List>
        );

        return (
            <div className={classes.root}>
                <Hidden mdUp>
                    <AppBar
                        position="static"
                        className={classes.appBar}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <SwipeableDrawer
                        disableDiscovery
                        variant="temporary"
                        open={this.state.mobileOpen}
                        onOpen={this.handleDrawerOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        { list }
                    </SwipeableDrawer>
                </Hidden>
                <Hidden smDown>
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        { list }
                    </Drawer>
                </Hidden>
                <div className={classes.content}>
                    <div className={classes.padding}>
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);