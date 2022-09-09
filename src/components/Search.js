
export const Search = ({value, searchInputHandler}) => {

    return (
       <input
       type='text'
       placeholder='Search for a country'
       value={value}
       onChange={searchInputHandler}
       />
    )
}