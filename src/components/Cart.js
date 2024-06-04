import React from 'react';
import './Cart.css';

const Cart = ({ cart, totalQuantity, totalPrice }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.product.id} className="cart-item">
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price}</p>
          
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
