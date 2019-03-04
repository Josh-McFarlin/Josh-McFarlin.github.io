import React from "react";
import PropTypes from "prop-types";
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';


class MyDocument extends Document {
    render() {
        const { pageContext } = this.props;

        return (
            <html lang="en" dir="ltr">
                <Head>
                    <link rel="stylesheet" href="/static/css/index.css" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <meta name="theme-color" content={pageContext ? pageContext.lightTheme.palette.primary.main : null} />
                    <meta name="author" content="Josh McFarlin" />
                    <meta name="description" content="Hi, I'm Josh McFarlin, a software engineering student studying at Georgia Tech in Atlanta, Georgia." />
                    <meta name="keywords" content="Software Engineer,Portfolio,Resume,Java,Web Development,React,JavaScript,HTML,CSS" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

MyDocument.getInitialProps = ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    let pageContext;
    const page = ctx.renderPage(Component => {
        const WrappedComponent = props => {
            pageContext = props.pageContext;
            return <Component {...props} />;
        };

        WrappedComponent.propTypes = {
            pageContext: PropTypes.object.isRequired,
        };

        return WrappedComponent;
    });

    let css;
    // It might be undefined, e.g. after an error.
    if (pageContext) {
        css = pageContext.sheetsRegistry.toString();
    }

    return {
        ...page,
        pageContext,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                <style
                    id="jss-server-side"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: css }}
                />
                {flush() || null}
            </React.Fragment>
        ),
    };
};

export default MyDocument;