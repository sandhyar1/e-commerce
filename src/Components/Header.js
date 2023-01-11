import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Header.css"
import Nav from './Nav';

const Header = () => {
  return (
    <div className='header'>
       <NavLink to="/">
       <img className='img' src="./images/logo.jpg" alt="my logo img" />
       </NavLink>
        <Nav />
       </div>
  );
};

export default Header