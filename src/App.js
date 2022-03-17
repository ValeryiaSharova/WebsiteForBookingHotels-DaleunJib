import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import ProductsLayout from './pages/products/productsLayout';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';
import ScrollUp from './sharedComponents/scrollUp';
import AppLoader from './sharedComponents/hoc/appLoader';

const App = () => {
  return (
    <>
      <AppLoader>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/products/:productId?" exact component={ProductsLayout} />
          <Route path="/login/:type?" exact component={LogIn} />
        </Switch>
        <Footer />
      </AppLoader>
      <ScrollUp />
    </>
  );
};
export default App;
