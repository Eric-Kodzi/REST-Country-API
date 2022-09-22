
export const ToggleTheme = ({theme, toggleTheme}) => {

 const toggleText = theme === 'light'? 'Dark Mode' : 'Light Mode';
 const mainBackgroundColor = theme === 'light'? 'hsl(207, 26%, 17%)':'hsl(0, 0%, 98%)';
 const elemBackgroundColor = theme === 'light'? 'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%';
 const  elemColor = theme === 'light'?  'hsl(0, 0%, 100%':'hsl(200, 15%, 8%)';
 const searchInputColor = theme === 'light'?  'white':'gray';

 const style = {
    backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
    color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
}

 const changeThemeStyle = () => {
    toggleTheme();
    var r = document.querySelector(':root');
    r.style.setProperty('--main-background-color', mainBackgroundColor);
    r.style.setProperty('--element-background-color', elemBackgroundColor);
    r.style.setProperty('--element-color', elemColor);
    r.style.setProperty('--search-input-color', searchInputColor);
    
 }

    return (
        <>
        <button style={style} onClick={changeThemeStyle} >
        <i class="fas fa-moon"></i>  {toggleText}
        </button>
        </>
    )
}