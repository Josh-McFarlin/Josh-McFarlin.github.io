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
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <meta name="theme-color" content={pageContext ? pageContext.lightTheme.palette.primary.main : null} />
                    <meta name="author" content="Josh McFarlin" />
                    <meta name="description" content="Hi, I'm Josh McFarlin, a software engineering student studying at Georgia Tech in Atlanta, Georgia." />
                    <meta name="keywords" content="Software Engineer,Portfolio,Resume,Java,Web Developer,React,JavaScript,HTML,CSS" />
                    <style>{`@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-display:swap;src:local('Roboto Light'),local('Roboto-Light'),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-display:swap;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-display:swap;src:local('Roboto Medium'),local('Roboto-Medium'),url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}html,body{width:100%;height:100%;margin:0}#__next{height:100%}div{transition:background-color 1000ms ease-in-out}h1,h2,h3,h4,h5,h6,p{transition:color 1000ms ease-in-out}picture{line-height:0}`}</style>
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
