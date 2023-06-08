import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('theme-light')

    useEffect(() => {
        const currentTheme = localStorage.getItem("currentTheme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, [])

    useEffect(() => {
        if (theme === 'theme-light') {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark')
        }
        else {
            document.body.classList.remove('theme-light');
            document.body.classList.add('theme-dark')
        }

        localStorage.setItem("currentTheme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
    </ThemeContext.Provider>
}