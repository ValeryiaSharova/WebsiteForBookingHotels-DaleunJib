import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './pages/main/main';
import Products from './pages/products/products';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';
import ScrollUp from './sharedComponents/scrollUp';
import { loadProducts } from './store/products';
import { loadCategory } from './store/category';
import { loadQuestions } from './store/questions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategory());
    dispatch(loadQuestions());
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" exact component={Products} />
        <Route path="/login" exact component={LogIn} />
      </Switch>
      <Footer />
      <ScrollUp />
    </>
  );
};
export default App;
