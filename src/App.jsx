import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainHome from './components/MainHome';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Login from './components/Login';
import Data from './components/Data';
import Aboutus from './components/Aboutus';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Productdetails from './components/Productdetails';
import { CartProvider } from './components/CartContext'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
