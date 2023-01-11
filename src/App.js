import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import Contactus from "./Contactus";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Error from "./Error";
import Header from "./Components/Header";

const App = () => {
return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/productdeatil/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  );
};
export default App;
