import { Link } from 'react-router-dom';
export const Country = ({name, population, region, capital, flag, theme}) => {
    const styles = {
        margin: 50,
        width: 220,
        backgroundColor: theme === 'light'? 'hsl(0, 0%, 100%': 'hsl(209, 23%, 22%)',
        color: theme === 'light'? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%'
    }

    return (
        <div style={styles}>
        <Link to={`/details/${name}`}>
        <img src={flag} style={{width: 220, height: 140}} alt={`Flag of ${name}`}  />
        </Link>
        <p>{name}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        </div>
    )
}