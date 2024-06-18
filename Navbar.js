import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useAuth from '../hooks/useAuth';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Logo src="/logo.png" alt="Logo" />
      <NavLinks>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/products" style={{ color: 'white' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white' }}>Cart</Link>
        {currentUser ? (
          <span>Welcome, {currentUser.email}</span>
        ) : (
          <Link to="/login" style={{ color: 'white' }}>Login</Link>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
