import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './product';
import ProductsList from './productsList';

const ProductsLayout = () => {
  const { productId } = useParams();
  return productId ? <Product productId={productId} /> : <ProductsList />;
};

export default ProductsLayout;
