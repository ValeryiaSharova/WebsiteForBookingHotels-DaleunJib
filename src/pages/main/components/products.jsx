/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../../sharedComponents/productCard';
import {
  getFirstProducts,
  getProductsError,
  getProductsLoadingStatus,
} from '../../../store/products';

const Products = () => {
  const products = useSelector(getFirstProducts());
  const isLoading = useSelector(getProductsLoadingStatus());
  const error = useSelector(getProductsError());

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> products
      </h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent shape and has a long
        life span. Buy and enjoy best quality.
      </p>

      <div className="product__container grid">
        {products.map(product => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className="container-center">
        <Link to="/products" className="button button--flex">
          See more <i className="ri-arrow-right-line button__icon" />
        </Link>
      </div>
    </section>
  );
};

export default Products;
