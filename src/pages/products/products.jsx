/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCategory,
  getCategoryError,
  getCategoryLoadingStatus,
  loadCategory,
} from '../../store/category';
import {
  getProducts,
  getProductsError,
  getProductsLoadingStatus,
  loadProducts,
} from '../../store/products';

const Products = () => {
  const productsState = useSelector(getProducts());
  const productsError = useSelector(getProductsError());
  const productsLoading = useSelector(getProductsLoadingStatus());
  const categoryState = useSelector(getCategory());
  const categoryError = useSelector(getCategoryError());
  const categoryLoading = useSelector(getCategoryLoadingStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategory());
    dispatch(loadProducts());
  }, []);

  if (productsLoading || categoryLoading) {
    return <h1>Loading...</h1>;
  }

  if (productsError || categoryError) {
    return <h3>{productsError || categoryError}</h3>;
  }

  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> products
      </h2>

      <div className="product__container grid">
        {productsState.map(product => {
          return (
            <article className="product__card" key={product._id}>
              <div className="product__circle" />
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product__img" />
              </div>

              <h3 className="product__title">{product.name}</h3>
              <div className="container-center">
                {product.category.map(p => (
                  <span className="product__category" key={p}>
                    {categoryState.find(c => c._id === p).name}
                  </span>
                ))}
              </div>
              <span className="product__price">${product.price}</span>

              <button className="button--flex product__button" type="button">
                <i className="ri-shopping-bag-line" />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
