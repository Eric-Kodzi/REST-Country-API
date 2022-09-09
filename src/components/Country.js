
export const Country = ({name, population, region, capital, flag}) => {
    const styles = {
        border: '1px solid black',
        margin: 20,
        width: 220,
        backgroundColor: 'hsl(207, 26%, 17%)'
    }

    return (
        <div style={styles}>
        <img src={flag} style={{width: 220, height: 140}} alt={`Flag of ${name}`}  />
        <p>{name}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
        </div>
    )
}