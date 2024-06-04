import React, { useState } from 'react';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products'); // products, cart, checkout

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);
    const newCart = [...cart];

    if (existingProductIndex >= 0) {
      newCart[existingProductIndex].quantity += quantity;
    } else {
      newCart.push({ product, quantity });
    }

    setCart(newCart);
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === 'products' && <ProductListing addToCart={addToCart} />}
      {page === 'cart' && <Cart cart={cart} totalQuantity={totalQuantity} totalPrice={totalPrice} />}
      {page === 'checkout' && <Checkout cart={cart} totalQuantity={totalQuantity} totalPrice={totalPrice} />}
    </div>
  );
};

export default App;
