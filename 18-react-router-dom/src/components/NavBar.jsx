import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <div className='nav'>
        <h3>Ecommerce</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to ='/Product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
