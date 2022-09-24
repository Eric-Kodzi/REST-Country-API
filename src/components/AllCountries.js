import { Country } from './Country.js';


export const AllCountries = ({countriesToDisplay, loading}) => {
    
    const displayCountries = countriesToDisplay.map(country =>
    
       <Country 
       flag = {country.flag}
       name = {country.name} 
       population = {country.population.toLocaleString()}
       region = {country.region}
       capital = {country.capital}
       key = {country.name}
       /> 
   
        )
    
    return (
        <main >
            {loading? <div className ='loader'></div> : displayCountries}
        </main>
    )
}