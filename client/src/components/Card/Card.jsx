import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='containerCard'>
      <div className='constainerImg'>
        <img className='flag' src={props.img}></img>
      </div>
      <div className='containerInfo'>
        <h2 className='name'>{props.name}</h2>
        <p className='continent'>{props.continent}</p>
        <p>{props.population}</p>
      </div>
    </div>
  )
}

export default Card