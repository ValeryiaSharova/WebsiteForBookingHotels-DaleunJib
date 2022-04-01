import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCategory } from '../../store/category';
import { getProductsLoadingStatus, loadProducts } from '../../store/products';
import { getQuestionsLoadingStatus, loadQuestions } from '../../store/questions';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());
  const questionsLoadingStatus = useSelector(getQuestionsLoadingStatus());
  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategory());
    dispatch(loadQuestions());
  }, []);

  if (productsLoadingStatus || questionsLoadingStatus) {
    return <h1>Loading...</h1>;
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default AppLoader;
