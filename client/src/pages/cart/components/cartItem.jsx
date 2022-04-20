import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductById } from '../../../store/products';

const CartItem = ({ productId, amount, onIncrement, onDecrement }) => {
  const product = useSelector(getProductById(productId));
  const handleIncrement = id => {
    onIncrement(id);
  };

  const handleDecrement = id => {
    onDecrement(id);
  };
  return (
    <>
      <h4>{product.name}</h4>
      <div className="cart-item">
        <img className="product__img" src={product.image} alt={product.name} />
        <div className="cart-item__info">
          <button
            className="cart-button button--flex"
            type="button"
            onClick={() => handleIncrement(productId)}
          >
            +
          </button>
          <span>{amount}</span>
          <button
            className="cart-button button--flex"
            type="button"
            onClick={() => handleDecrement(productId)}
          >
            -
          </button>
        </div>
        <div className="cart-item__info">
          <span>{(amount * product.price).toFixed(2)}$</span>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  productId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CartItem;
