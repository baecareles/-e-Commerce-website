import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import withLoading from '../components/withLoading';

const ProductListWithLoading = withLoading(ProductList);

const Products = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { products, loading } = useProducts();

  useEffect(() => {
    if (products.length) {
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    }
  }, [products, dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <ProductListWithLoading isLoading={loading} products={state.products} />
    </div>
  );
};

export default Products;
