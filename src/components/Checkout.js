import React from 'react';
import './Checkout.css';

const Checkout = ({ cart, totalQuantity, totalPrice }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.map(item => (
        <div key={item.product.id} className="checkout-item">
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price}</p>
        </div>
      ))}
      <div className="checkout-summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <button onClick={() => alert('Order placed successfully!')}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
