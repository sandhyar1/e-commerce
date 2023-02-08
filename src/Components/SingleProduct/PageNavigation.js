import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const PageNavigation = ({name}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink>/{name}
    </Wrapper>
  );
};
const Wrapper=styled.section`
  height: 15rem;
  background-color:white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  
  a {
    font-size: 3.2rem;
   }
 `
 ;
 export default PageNavigation;