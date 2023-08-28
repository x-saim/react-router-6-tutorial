import { NavLink } from 'react-router-dom';

import React from 'react'

export const StyledNavbar = () => {
  return (
    <nav className='navbar'>
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
    </nav>
      )
}
