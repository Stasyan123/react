import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/about">About us</NavLink>
        </nav>
    </div>
  )
}

export default Navbar