import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

import ThemeContext from "../src/ThemeContext";
import Sidebar from "../src/components/Sidebar";


export default class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            useLight: true,
            toggleTheme: () => this.setState(prevState => ({ useLight: !prevState.useLight }))
        };

        this.pageContext = getPageContext();
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render () {
        const { Component, pageProps } = this.props;
        const { useLight } = this.state;

        const customTheme = createMuiTheme({
            typography: {
                useNextVariants: true,
            },
            palette: {
                type: useLight ? 'light' : 'dark',
                primary: {
                    main: '#00796b'
                },
                secondary: {
                    main: '#607D8B'
                }
            }
        });

        return (
            <Container>
                <Head>
                    <title>Josh McFarlin</title>
                </Head>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                    <ThemeContext.Provider value={this.state}>
                        <MuiThemeProvider
                            theme={customTheme}
                            sheetsManager={this.pageContext.sheetsManager}
                        >
                            <CssBaseline />
                            <Sidebar>
                                <Component {...pageProps} />
                            </Sidebar>
                        </MuiThemeProvider>
                    </ThemeContext.Provider>
                </JssProvider>
            </Container>
        );
    }
}
