import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import ProductsLayout from './pages/products/productsLayout';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';
import ScrollUp from './sharedComponents/scrollUp';
import AppLoader from './sharedComponents/hoc/appLoader';
import ScrollToTop from './sharedComponents/scrollToTop';

const App = () => {
  return (
    <>
      <AppLoader>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products/:productId?" component={ProductsLayout} />

          <Route exact path="/login/:type?" component={LogIn} />
        </Switch>

        <Footer />
      </AppLoader>
      <ScrollUp />
    </>
  );
};
export default App;
