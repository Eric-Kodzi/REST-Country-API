import { Filter } from "./Filter";
import { Search } from "./Search";

export const SearchAndFilter = ({theme, searchTerm, regionSelected, searchInputHandler, regionSelectHandler}) => {
    return (
        <nav>
            <Search 
            theme={theme}
            value={searchTerm}
            searchInputHandler={searchInputHandler}
            />
            <Filter 
            theme={theme}
            value={regionSelected}
            regionSelectHandler={regionSelectHandler}
            />
        </nav>
    )
}