import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <div><h2>Countries page</h2></div>
        <div>
            <Link to='/home'><a>Ingresar al home</a></Link>
        </div>
    </div>
  )
}

export default LandingPage