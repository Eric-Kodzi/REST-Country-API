
export const Country = (props) => {

    return (
        <>
        <p>Flag</p>
        <p>{props.name}</p>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
        </>
    )
}