/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getProducts,
  getProductsError,
  getProductsLoadingStatus,
  loadProducts,
} from '../../../store/products';

const Products = () => {
  const products = useSelector(getProducts());
  const isLoading = useSelector(getProductsLoadingStatus());
  const error = useSelector(getProductsError());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

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
        {products
          .filter((el, index) => index <= 5)
          .map(product => (
            <article className="product__card" key={product._id}>
              <div className="product__circle" />
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product__img" />
              </div>

              <h3 className="product__title">{product.name}</h3>
              <span className="product__price">${product.price}</span>

              <button className="button--flex product__button" type="button">
                <i className="ri-shopping-bag-line" />
              </button>
            </article>
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
