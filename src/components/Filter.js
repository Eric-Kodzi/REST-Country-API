
export const Filter = ({value, regionSelectHandler, theme}) => {
    const style = {
        backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
        color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
    }
    return (
        <form>
        <select style={style} id='region' value={value} onChange={regionSelectHandler}>
        <option value='all'>Filter by region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
        </select>
        </form>
    )
}