import React,{useContext} from 'react'
import LandingPage from './Components/LandingPage';
import {useProductContext} from "./context/productcontex"

const About =() => {
const {myName}= useProductContext();
  return(
    <>  
    {myName}
  <LandingPage />
  </>
  )
};

export default About;