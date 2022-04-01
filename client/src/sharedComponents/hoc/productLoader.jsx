import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getDataStatus, loadProducts } from '../../store/products';

const ProductLoader = ({ children }) => {
  const dispatch = useDispatch();
  const dataStatus = useSelector(getDataStatus());
  useEffect(() => {
    if (!dataStatus) {
      dispatch(loadProducts());
    }
  }, []);

  if (!dataStatus) {
    return <h1>Loading...</h1>;
  }
  return children;
};

ProductLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default ProductLoader;
