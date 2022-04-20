/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCategory } from '../../store/category';
import { getProductsLoadingStatus, loadProducts } from '../../store/products';
import { getQuestionsLoadingStatus, loadQuestions } from '../../store/questions';
import { getIsLoggedIn } from '../../store/user';
import localStorageService from '../../services/localStorage.service';
import { loadUserCart } from '../../store/cart';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());
  const questionsLoadingStatus = useSelector(getQuestionsLoadingStatus());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const userId = localStorageService.getUserId();
  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategory());
    dispatch(loadQuestions());
    if (isLoggedIn) {
      dispatch(loadUserCart(userId));
    }
  }, [isLoggedIn]);

  if (productsLoadingStatus || questionsLoadingStatus) {
    return <h1>Loading...</h1>;
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default AppLoader;
