import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.cardItems);

  console.log('Cart Items:', cardItems);

  return (
    <div>
      <h1>Cart</h1>
      {cardItems.length > 0 ? (
        cardItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
