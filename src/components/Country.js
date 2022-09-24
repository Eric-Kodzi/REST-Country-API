import { Link } from 'react-router-dom';


export const Country = ({name, population, region, capital, flag }) => {
    
    return (
        <Link to = {`/details/${name}`}>
         <section>
           <img src = {flag} style = {{width:264, height:170}} alt = {`Flag of ${name}`}  />
           <div className='country-stats'>
             <h3>{name}</h3>
             <span className = 'country-stats-bold-span'>Population:</span> <span>{population}</span><br/>
             <span className ='country-stats-bold-span'>Region:</span> <span>{region}</span><br/>
             <span className ='country-stats-bold-span'>Capital:</span> <span>{capital || 'N/A'}</span>
           </div>
         </section>
        </Link>
    )
}