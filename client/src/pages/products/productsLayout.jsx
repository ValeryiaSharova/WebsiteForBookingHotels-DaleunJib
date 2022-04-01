import React from 'react';
import { useParams } from 'react-router-dom';
import ProductLoader from '../../sharedComponents/hoc/productLoader';
import Product from './product';
import ProductsList from './productsList';

const ProductsLayout = () => {
  const { productId } = useParams();
  return (
    <ProductLoader>
      {productId ? <Product productId={productId} /> : <ProductsList />}
    </ProductLoader>
  );
};

export default ProductsLayout;
