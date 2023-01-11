import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroSection.css'

const HeroSection = () =>{
    <div className='conatiner'>
     <div className='grid grid-two-column'>
    <div className='hero-section-data'>
    <h3 className='intro'>Welcome to our store</h3>
    <NavLink>
        <button  className='btn'>Shop Now</button>
    </NavLink>
    </div>
      {/* our home page image */}
    <div className='hero-section-image'>
    <figure>
        <image src="images/shopping.jpg"
        alt="hero-section-photo"
        className="img-style"/>
        </figure>
    </div>
    </div>
    </div>

}
export default HeroSection;