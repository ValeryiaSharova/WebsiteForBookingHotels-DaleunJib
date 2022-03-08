/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, categoryState }) => {
  return (
    <article className="product__card" key={product._id}>
      <div className="product__circle" />
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product__img" />
      </div>

      <h3 className="product__title">{product.name}</h3>
      {categoryState && (
        <div className="container-center">
          {product.category.map(p => (
            <span className="product__category" key={p}>
              {categoryState.find(c => c._id === p).name}
            </span>
          ))}
        </div>
      )}
      <span className="product__price">${product.price}</span>

      <button className="button--flex product__button" type="button">
        <i className="ri-shopping-bag-line" />
      </button>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  categoryState: PropTypes.arrayOf(PropTypes.object),
};

ProductCard.defaultProps = {
  categoryState: null,
};

export default ProductCard;
