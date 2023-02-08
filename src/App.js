import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contactus from "./Contactus";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Error from "./Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {GlobalStyle } from "./GlobalStyle"
import { ThemeProvider } from "styled-components";




const App = () => {
  const theme ={
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper:"rgb(0,0,255)",

      bg: "#F6F8FA",
      footer_bg:"#808080",
      btn: "rgb(41,192,231)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
    
      helper: "#8490ff",
      gradient:
        "linear-gradient(135deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",

    },

    media:{
      mobile:"768px",
      tab:"998px"
    },
   };

return (
  <ThemeProvider theme={theme} >
      <Router>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
      </ThemeProvider>
  );
};
export default App;
