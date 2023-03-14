import {React, useEffect} from 'react';
import { useParams } from 'react-router';
import { getCountry } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux';
/* import ActivityCard from './ActivityCard' */
import { Link } from 'react-router-dom';

const Details = () => {
    const {countryId} = useParams();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(getCountry(countryId));
      }, [dispatch, countryId]);

    const country = useSelector((state) => state.country)

    return (
        <div className=''>
            <div className=''>
            <Link to='/home'>
                <button className=''>Volver</button>
            </Link>
            </div>
           <img src={country.img} alt={country.name} className=''/>
           <div className=''>
             <p className=''><strong>País:</strong> {country.name}</p>
             <p><strong>Continente:</strong>{country.continent}</p>
             <p><strong>Capital:</strong> {country.capital}</p>
             <p><strong>Subregión:</strong> {country.subregion}</p>
             <p><strong>Área:</strong> {country.area} km2</p>
             <p><strong>Población:</strong> {country.population} habitantes</p>
             <div className=''>
             <div className=''>
{/*              {country.activities && country.activities.map((activity) => 
             <ActivityCard 
                name={activity.name} 
                difficulty={activity.difficulty}
                duration={activity.duration}
                season={activity.season} />)} */}
             </div>
             </div>
            </div>  
        </div>
    );
}

export default Details