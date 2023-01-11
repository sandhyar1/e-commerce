import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg" ;

const Nav = () => {
   const [menuIcon,setMenuIcon] = useState();
  return (
   <>
   <nav>
   <div className={menuIcon ? "navbar active" :"navbar"}>
    <div className='nav-container'>
     <ul className='nav-lists'>
     <li>
        <NavLink to="/" className="nav-link" onClick={()=>setMenuIcon(false)}>
        Home
        </NavLink>
     </li>
     <li>
        <NavLink to="/Products" className="nav-link" onClick={()=>setMenuIcon(false)}>
         Products
        </NavLink>
     </li>
     <li>
        <NavLink to="/About" className="nav-link" onClick={()=>setMenuIcon(false)}>
        About
        </NavLink>
     </li>
     <li>
        <NavLink to="/Contact" className="nav-link" onClick={()=>setMenuIcon(false)}>
        Contact us
        </NavLink>
     </li>
     <li>
        <NavLink to="/cart" className="nav-link cart-link">
        <FiShoppingCart  className="cart-logo"/>
        <span className='cart-total'>0</span> </NavLink>
     </li>
     </ul>
     {/* two buttons for open and close  Hamburger menu bar for responsive using react icons*/}

     <div className='nav-btn'>
      <CgMenu name="menu-outline" className="nav-icon" onClick={()=>setMenuIcon(true)}/>
      <CgClose name="close-ouline" className="nav-icon close-outline"onClick={()=>setMenuIcon(false)}/>
      </div>
     </div>
    </div>
    </nav>
    </>
  );
};
export default Nav;