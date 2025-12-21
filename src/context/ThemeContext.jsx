import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');

    useEffect(() => {
        const root = window.document.documentElement;
        // Remove previous theme attributes if any (though we just overwrite data-theme)
        root.setAttribute('data-theme', theme);
    }, [theme]);

    const themes = [
        { id: 'default', name: 'Cosmic', color: '#7c3aed' },
        { id: 'green', name: 'Emerald', color: '#10b981' },
        { id: 'orange', name: 'Sunset', color: '#f97316' },
        { id: 'pink', name: 'Neon', color: '#ec4899' },
    ];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
