import { ToggleTheme } from "./ToggleTheme"

export const Header = ({theme, toggleTheme}) => {

    const style = {
        backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
        color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
    }

    return (
        <header>
            <div className="header-text">
        <h1>Where in the world?</h1>
        <ToggleTheme 
        theme={theme}
        toggleTheme={toggleTheme}
        />
           </div>
        </header>
    )
}