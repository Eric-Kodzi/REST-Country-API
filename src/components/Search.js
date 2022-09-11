
export const Search = ({value, searchInputHandler, theme}) => {
    const style = {
        backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
        color: theme === 'light'? 'hsl(0, 0%, 52%' : 'hsl(0, 0%, 100%'
    }
    return (
       <input
       style={style}
       type='text'
       placeholder='Search for a country'
       value={value}
       onChange={searchInputHandler}
       />
    )
}