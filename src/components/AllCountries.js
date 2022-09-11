import { Country } from './Country.js';


export const AllCountries = ({countriesToDisplay, theme}) => {
    
    const displayCountries = countriesToDisplay.map(country =>
    
       <Country 
       theme={theme}
       flag={country.flag}
       name={country.name} 
       population={country.population}
       region={country.region}
       capital={country.capital}
       key={country.name}/> 
   
        )
    const styles = {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    }
    return (
        <div>
        <h2>ALL COUNTRIES</h2>
        <div style={styles}>{displayCountries}</div>
        </div>
    )
}