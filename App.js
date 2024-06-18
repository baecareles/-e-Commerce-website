import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <GlobalStyles />
          <div className="App">
            <Navbar />
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
