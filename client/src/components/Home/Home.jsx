import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'
import {getCountries, filterByContinent, filterByActivity, getActivities, orderName}  from '../../redux/actions/actions'
import{useDispatch, useSelector} from 'react-redux'
import './Home.css'
import {Link} from 'react-router-dom'
import Paginado from '../Paginado/Paginado'

const Home = () => {
  
  const dispatch = useDispatch();

  // Lo mismo que hacer mapStateToProps // Solo retorna la parte del estado que me interesa
  const allCountries = useSelector((state) => state.countries)
  const allActivities = useSelector((state) => state.activities)

  // Mientras se cargan los paises
  const[isLoading, setIsLoading] = useState(true);

  // Pagina actual 
  const [currentPage, setCurrentPage] = useState(1)
  // Cantidad de paises por pagina
  const [countriesPage, setCountriesPage] = useState(9)

  const [order, setOrder] = useState('')

  //Posicion del ultimo pais
  const LastCountry = currentPage * countriesPage
  //Posicion del primer pais
  const FirstCountry = LastCountry - countriesPage
  // Se divide el array de acuerdo a la cantidad de paises necesarios (9)
  const currentCountries = allCountries.slice(FirstCountry, LastCountry)

  const paginado = (totalPages)=>{
      setCurrentPage(totalPages);
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(getCountries(),
    dispatch(getActivities()));
    setIsLoading(false)
}, [dispatch])

const changeOrder = (event) => {
  event.preventDefault()
  setOrder(event.target.value)
}

function handleSort(event){
  event.preventDefault();
  dispatch(orderName(event.target.value));
  setCurrentPage(1);
  setOrder(`Ordenado ${event.target.value}`)
}

function handleFilterContinent(event){
  // Se toma como payload el value de la option que elija el usuario
  event.preventDefault();
  dispatch(filterByContinent(event.target.value));
  setCurrentPage(1);
}

function handleFilterActivity(event){
  // Se toma como payload el value de la option que elija el usuario
  dispatch(filterByActivity(event.target.value))
  console.log(event.target.value)
}
 
  return (
    <div>
      <Navbar></Navbar>
{/*       <div className='containerCards'>  
        {allCountries.map((country)=>(
          <Card name={country.name} img={country.img} continent={country.continents}></Card>
        ))}
      </div> */}
      <div>
      <header className=''>
                <Link to='/'>
                <h1 className=''>Países del mundo</h1>
                </Link>
                <div className=''>
                    <Link to='/activity' className=''>Crear Actividad</Link>
                </div>
      </header>
            
        
        {/* <div className={styles.center}>
            <button className={styles1.back} onClick={event => handleClick(event)}>Cargar paises nuevamente</button>
        </div> */}
        <div>
            <div className=''>
            <select onChange={event => changeOrder(event)} className=''>
                {/** Deben ser filtrados ascendente y descendente por orden alfabetico y por cantidad de poblacion
                 */}
                <option>Ordenar por poblacion</option> 
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
            </select>
            <select onChange={event => handleSort(event)} className=''>
                {/** Deben ser filtrados ascendente y descendente por orden alfabetico y por cantidad de poblacion
                 */}
                <option value='normal'>Ordenar por nombre</option> 
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={event => handleFilterContinent(event)} className=''>
                {/* filtrar por continente y por tipo de actividad turística */}
                <option value="All">Todos</option>
                <option value="Africa">Africa</option>
                <option value="North America">America del Norte</option>
                <option value="South America">America del Sur</option>
                <option value="Antarctica">Antartica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
            <select onChange={event => handleFilterActivity(event)} className=''>
                <option value="All">Todas</option>
                { allActivities && allActivities.map(activity => (
                    <option value={activity.name}>{activity.name}</option>
                ))}
            </select>
            </div>

            {/* Se hace el map sobre el nuevo array de countries, para renderizar solo los 
            necesarios por pagina */}
            { isLoading ? <img src='../../images\loading.gif' alt='Cargando...'/> :
            <div className='containerCards'>
            {  currentCountries?.map(country => (
                <Link to={'/home/' + country.id}>
                <Card 
                name={country.name} 
                img={country.img} 
                continent={country.continents}
                population={country.population}/>
                </Link>
            ))}
            </div>
            }4444444444444444444444444
            

            <Paginado 
                countriesPage={countriesPage}
                allCountries={allCountries.length}
                paginado={paginado}
            />

            {/* <button onClick={(event) => {prev(event)}}
            disabled={currentPage <= 0 }>Prev</button>
            <button onClick={(event) => {next(event)}}
            disabled={currentCountries < 9 }>Next</button> */}

        </div>
      </div>
    </div>
  )
}

export default Home