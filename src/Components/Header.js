import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
       <NavLink to="/">
       <img src="./images/logo.jpg" alt="my logo img" />
       </NavLink>
        <Nav />
       </MainHeader>
  );
};
const MainHeader = styled.header` 
padding:0 4.8rem;
height:9rem;
background:gray;
display:flex;
justify-content: space-between;
align-items: center;
position: relative;
img{
height:9rem;
}
`;

export default Header;