import { useContext } from "react"
import { ThemeContext, ThemeProvider } from "./cotext/ThemeContext"
import './style.css'

 export default function AppTheme(){
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    )
}

function Home(){
    const {isDarkMode} = useContext(ThemeContext)

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <h1>{isDarkMode ? 'Modo oscuro' : 'Modo claro'}</h1>
            <ThemeToggle />
        </div>
    )
}

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
      <button onClick={toggleTheme}>
        {isDarkMode ? "Cambiar a Modo claro" : "Cambiar a Modo oscuro"}
      </button>
    );
}
