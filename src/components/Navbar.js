import React from 'react';
import './Navbar.css';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setPage('products')}>Products</button>
      <button onClick={() => setPage('cart')}>Cart</button>
      <button onClick={() => setPage('checkout')}>Checkout</button>
    </nav>
  );
};

export default Navbar;
