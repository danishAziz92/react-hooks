/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
    return useContext(UpdateThemeContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    );
}