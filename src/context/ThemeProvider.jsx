import { useState } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )


}

export default ThemeProvider