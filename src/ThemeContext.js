import React from 'react';

const ThemeContext = React.createContext({
    useLight: true,
    toggleTheme: () => {}
});

export default ThemeContext;
