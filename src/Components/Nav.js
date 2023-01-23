import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu,CgClose} from "react-icons/cg" ;

const Nav = () => {
   const [menuIcon,setMenuIcon] = useState();
  return (
   <Wrapper>
   <nav>
   <div className={menuIcon ? "navbar active" :"navbar"}>
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
        <NavLink to="/cart" className="nav-link cart-trolley--link">
        <FiShoppingCart  className="cart-trolley"/>
        <span className='cart-total--item'>0</span> </NavLink>
     </li>
     </ul>
     {/* two buttons for open and close  Hamburger menu bar for responsive using react icons*/}

     <div className='nav-btn'>
      <CgMenu name="menu-outline" className="nav-icon" onClick={()=>setMenuIcon(true)}/>
      <CgClose name="close-ouline" className="nav-icon close-outline"onClick={()=>setMenuIcon(false)}/>
      </div>
     </div>
    </nav>
    </Wrapper>
  );
};


const Wrapper =styled.section`
.nav-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      list-style-type: none;
      .nav-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration:none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          background:white;
         border:black;
         border-radius:10%;
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .nav-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }
    ${'' /* .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    } */}
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .nav-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .nav-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .nav-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      ${'' /* .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    } */}
  `;
  export default Nav;
