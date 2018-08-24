import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';

import { Link, withRouter } from "react-router-dom";

import ContactDialog from '../components/ContactDialog';

const drawerWidth = 350;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex'
        }
    },
    appBar: {
        position: 'static',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        }
    },
    flex: {
        flexGrow: 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#1b1b1b',
        border: 'none',
        maxWidth: '80%',
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            maxWidth: 'none'
        }
    },
    sidebar: {
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        overflowY: 'scroll'
    },
    link: {
        textDecoration: 'none'
    },
    item: {
        textAlign: 'center'
    },
    imageHolder: {
        width: '100%',
        height: 0,
        maxHeight: '30%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    imageText: {
        width: "100%",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textAlign: 'center'
    },
    whiteText: {
        color: 'white'
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
        this.handleContactOpen = this.handleContactOpen.bind(this);
        this.handleContactClose = this.handleContactClose.bind(this);
    }

    handleDrawerToggle() {
        this.setState({
            mobileOpen: !this.state.mobileOpen
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
        const { classes, theme } = this.props;

        const drawer = (
            <List disablePadding className={classes.sidebar}>
                {
                    this.props.image ? (
                        <div
                            className={classes.imageHolder}
                            style={{
                                backgroundImage: "url('" + this.props.image + "')"
                            }}
                        >
                            <div className={ classes.imageText }>
                                <Typography variant="headline" className={classes.whiteText}>{this.props.name}</Typography>
                                <Typography variant="subheading" className={classes.whiteText}>{this.props.occupation}</Typography>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Typography variant="headline" className={classes.whiteText}>{this.props.name}</Typography>
                            <Typography variant="subheading" className={classes.whiteText}>{this.props.occupation}</Typography>
                        </div>
                    )

                }
                <div>
                {
                    this.props.links.map((item) =>
                        <Link
                            to={item.link}
                            key={item.title}
                            onClick={this.handleDrawerToggle}
                            className={classes.link}
                        >
                            <ListItem button className={classes.item}>
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={{
                                        style: {color: 'white'}
                                    }}
                                />
                            </ListItem>
                        </Link>
                    )
                }
                {
                    this.props.contact &&
                        <ListItem
                            button
                            onClick={this.handleContactOpen}
                            className={classes.item}
                        >
                            <ListItemText
                                primary="Contact Me"
                                primaryTypographyProps={{
                                    style: {color: 'white'}
                                }}
                            />
                        </ListItem>

                }
                </div>
                {
                    this.props.contact &&
                        <ContactDialog open={this.state.contactOpen} contact={this.props.contact} handleClose={this.handleContactClose}/>
                }
            </List>
        );

        const PageText = withRouter(props => {
            let currentPage = "Home";
            if (props.location.pathname === "/") {
                currentPage = "Home";
            } else if (props.location.pathname === "/aboutme/") {
                currentPage = "About Me";
            } else if (props.location.pathname === "/portfolio/") {
                currentPage = "Portfolio";
            }

            return(
                <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}
                >
                    {currentPage}
                </Typography>
            );
        });

        return (
            <div className={classes.root}>
                <Hidden mdUp>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <PageText/>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <div className={classes.content}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    links: PropTypes.array.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    occupation: PropTypes.string,
    contact: PropTypes.array
};

export default withStyles(styles, { withTheme: true })(Sidebar);