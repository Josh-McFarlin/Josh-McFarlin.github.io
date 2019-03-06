import ReactGA from 'react-ga'

const dev = process.env.NODE_ENV !== 'production';

ReactGA.initialize("UA-36479142-3", {
    anonymizeIp: true,
    debug: dev
});

export default ReactGA;
