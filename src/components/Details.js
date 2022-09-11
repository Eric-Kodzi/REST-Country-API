import { Link, useParams } from 'react-router-dom';

export const Details = ({countries, theme}) => {

    const {name }= useParams();

    const details = countries.filter(country => country.name.common === name)[0];
    const style = {
        backgroundColor: theme === 'light'? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',
        color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
    }

    return (
        <div style={style}>
        <Link to='/'>Back</Link>
        <img src={details.flags.svg} style={{width:300, height:180}} alt='flag' />
        <h2>{name}</h2>
        <p>Native name: </p>
        <p>Population: {details.population}</p>
        <p>Region: {details.region}</p>
        <p>Sub Region: {details.subregion}</p>
        <p>Capital: {details.capital}</p>
        <p>Top Level Domain:</p>
        <p>Currencies: </p>
        <p>Languages: </p>
        <p>Border Countries: </p>
        </div>
    )
}