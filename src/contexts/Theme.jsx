import React, { useState } from "react"

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('blue');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}