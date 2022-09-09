import { Country } from './Country.js';

export const AllCountries = ({countriesToDisplay}) => {
    
    const displayCountries = countriesToDisplay.map(country =>
       <Country 
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
        //backgroundColor: 'hsl(207, 26%, 17%)'
    }
    return (
        <div>
        <h2>ALL COUNTRIES</h2>
        <div style={styles}>{displayCountries}</div>
        </div>
    )
}