import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (

    <div className='navigation'>

      <Link className='navigation-link' to='/'>Home</Link>
      <Link className='navigation-link' to='/countries'>Countries</Link>
      <Link className='navigation-link' to='/search'>Search</Link>
    </div>

    
  )
}

export default Navigation