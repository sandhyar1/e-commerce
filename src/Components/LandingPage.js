import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const LandingPage = () =>{
    return(
        <Wrapper>
    <div className='conatiner'>
     <div className='grid grid-two-column'>
    <div className='hero-section-data'>
    <h3 className='intro-data'>Welcome to SHOPIFY</h3>
    <NavLink className="shp">
    <Button className="btn">Shop Now</Button>
    </NavLink>
    </div>
      {/* our home page image */}
    <div className='hero-section-image'>
    <figure>
        <img src="images/shopping.jpg"
        alt="hero-section-photo"
        className="img-style"/>
        </figure>
    </div>
    </div>
    </div>
    </Wrapper>
    )
}
const Wrapper =styled.section`
img {
    width: 80rem;

  }
  .hero-section-data {
    h3 {
      font-size:10rem;
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    
    }
    .btn{
      align-items:center;

    }
  }
  .hero-section-image {
   max-width: 80rem;
    height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -2rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 60rem;
    height: 60rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure::after {
      content: "";
      width: 30%;
      height: 40%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default LandingPage;