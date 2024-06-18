import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  text-align: left;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Product = ({ product }) => {
  const { dispatch } = useContext(ProductContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <ProductCard>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button onClick={addToCart}>Add to Cart</Button>
    </ProductCard>
  );
};

export default Product;
