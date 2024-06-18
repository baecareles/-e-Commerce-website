import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  text-align: left;
  background-color: #f0f0f0;
`;

const CartItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const Cart = () => {
  const { state } = useContext(ProductContext);

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {state.cart.length ? (
        state.cart.map((item, index) => (
          <CartItem key={index}>
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartContainer>
  );
};

export default Cart;
