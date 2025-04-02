import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact/Contact"; 
import Products from "./Component/Products/Products";
import Product from "./Component/Products/Product";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/login/login ";
import Compare from "./Component/Compare/Compare";
import Wishlist from "./Component/Wishlist/Wishlist";
import Footer from "./Component/footer/Footer";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import { CartProvider } from "./Component/Cart/CartContext"; 
import "./App.css";

function App() {
  return (
    <CartProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;





