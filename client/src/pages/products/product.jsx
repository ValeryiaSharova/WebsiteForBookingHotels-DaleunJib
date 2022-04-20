/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProductById } from '../../store/products';
import { getCategory } from '../../store/category';

const Product = ({ productId }) => {
  const product = useSelector(getProductById(productId));
  const categoryState = useSelector(getCategory());
  return (
    <section className="container section">
      <h3 className="product-solo__title">{product.name}</h3>
      <div className="product-solo__container">
        <div className="container-center">
          <img src={product.image} alt={product.name} className="product-solo__img" />

          <div>
            {product.categories.map(p => (
              <span className="product__category" key={p}>
                {categoryState.find(c => c._id === p).name}
              </span>
            ))}
          </div>
        </div>
        <p className="product-solo__description">{product.description}</p>
      </div>

      <div className="container-center">
        <span className="product__price">${product.price}</span>

        <button className="button--flex product-solo__button" type="button">
          <i className="ri-shopping-bag-line" />
        </button>
      </div>
    </section>
  );
};

Product.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Product;
