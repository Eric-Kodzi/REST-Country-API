
export const Filter = ({value, regionSelectHandler, theme}) => {
    
    return (
        <form>
        <select  id='region' value={value} onChange={regionSelectHandler}>
        <optgroup>
        <option value='all'>Filter by region</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
        </optgroup>
        </select>
        </form>
    )
}