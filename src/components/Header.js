import { ToggleTheme } from "./ToggleTheme"

export const Header = ({theme, toggleTheme}) => {

    
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