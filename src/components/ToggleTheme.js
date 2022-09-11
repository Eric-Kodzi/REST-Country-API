
export const ToggleTheme = ({theme, toggleTheme}) => {

 const toggleText = theme === 'light'? 'Dark Mode' : 'Light Mode';
 const style = {
    backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
    color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
}

    return (
        <>
        <button style={style} onClick={toggleTheme}>{toggleText}</button>
        </>
    )
}