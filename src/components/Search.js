
export const Search = ({value, searchInputHandler}) => {
    
   
    return (
       <div className="search-input">
         <i class="fa fa-search"></i>
         <input
         type='text'
         placeholder='Search for a country' 
         value={value}
         onChange={searchInputHandler}
         />
       </div>
    )
}