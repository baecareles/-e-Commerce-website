import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the E-commerce App</h1>
      <p>Explore our products and add them to your cart.</p>
    </HomeContainer>
  );
};

export default Home;
