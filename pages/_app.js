import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

import ThemeContext from "../src/ThemeContext";
import Sidebar from "../src/components/Sidebar";
import ReactGA from "../src/analytics";


export default class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            useLight: true,
            lastPath: null,
            toggleTheme: () => {
                this.setState(prevState => ({
                    useLight: !prevState.useLight
                }), () => {
                    ReactGA.event({
                        category: 'Theme',
                        action: 'Set Brightness',
                        label: this.state.useLight ? 'Using Light' : 'Using Dark'
                    });
                });
            }
        };

        this.pageContext = getPageContext();
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    checkPath = () => {
        const { router } = this.props;
        const { lastPath } = this.state;

        const currentPath = router.route;

        if (currentPath !== lastPath) {
            ReactGA.pageview(currentPath);

            this.setState({
                lastPath: currentPath
            });
        }
    };

    render () {
        const { Component, pageProps } = this.props;
        const { useLight } = this.state;

        this.checkPath();

        return (
            <Container>
                <Head>
                    <title>Josh McFarlin</title>
                </Head>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                    <MuiThemeProvider
                        theme={useLight ? this.pageContext.lightTheme : this.pageContext.darkTheme}
                        sheetsManager={this.pageContext.sheetsManager}
                    >
                        <CssBaseline />
                        <ThemeContext.Provider value={this.state}>
                            <Sidebar>
                                <Component pageContext={this.pageContext} {...pageProps} />
                            </Sidebar>
                        </ThemeContext.Provider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}
