import { Link, useParams } from 'react-router-dom';


export const Details = ({countries, theme}) => {

    const {name }= useParams();

    const details = countries.filter(country => country.name === name || country.nativeName === name)[0];
    
    const currencies = Object.keys(details).includes('currencies')? details.currencies[0].name : 'N/A';

    const borders = (arr) => {
        return arr.map(code => {
           const borderCountry = countries.filter(country => country.alpha3Code === code)[0];
            return <Link to = {`/REST-Country-API/details/${borderCountry.name}`} >
                <div className='border-country'>
                {borderCountry.name}
                </div>
         </Link>
        })
    }

    const borderCountries = Object.keys(details).includes('borders')? borders(details.borders) : 'Has no border countries';

    return (
        <div className='details'>
        <Link to='/REST-Country-API'><div  className='back-arrow'><i class="fa fa-long-arrow-left"></i>    Back</div></Link>
        <div className='details-content'>
        <img src={details.flags.png} alt='flag' />
        <div className='details-text'>
        <h2>{name}</h2>
        <div className='details-text-main'>
            <div className='details-text-main-1'>
        <span className='details-text-bold'>Native name:</span> <span>{details.nativeName} </span><br/>
        <span className='details-text-bold'>Population:</span> <span>{details.population.toLocaleString()} </span><br/>
        <span className='details-text-bold'>Region:</span> <span>{details.region}</span><br/>
        <span className='details-text-bold'>Sub Region:</span> <span>{details.subregion}</span><br/>
        <span className='details-text-bold'>Capital:</span> <span> {details.capital}</span><br/><br/><br/>
           </div>
           <div className='details-text-main-2'>
           <span className='details-text-bold'>Top Level Domain:</span> <span>{details.topLevelDomain}</span><br/>
           <span className='details-text-bold'>Currencies:</span> <span>{currencies}</span><br/> 
           <span className='details-text-bold'>Languages:</span> <span> {details.languages.map(lang => lang.name).toString()}</span><br/><br/><br/><br/>
           </div>
        </div>
        <div className='borders-container'><span><strong>Border {!Object.keys(details).includes('borders')? 'Countries': details.borders.length === 1? 'Country' : 'Countries'}: </strong></span><div className='border-countries-list'>{borderCountries}</div></div>
        </div>
        </div>
        </div>
    )

}



