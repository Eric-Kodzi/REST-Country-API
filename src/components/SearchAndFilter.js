import { Filter } from "./Filter";
import { Search } from "./Search";

export const SearchAndFilter = ({searchTerm, regionSelected, searchInputHandler, regionSelectHandler}) => {
    return (
        <nav>
            <Search 
            value={searchTerm}
            searchInputHandler={searchInputHandler}
            />

            <Filter 
            value={regionSelected}
            regionSelectHandler={regionSelectHandler}
            />
        </nav>
    )
}