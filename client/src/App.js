import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './pages/main/main';
import ProductsLayout from './pages/products/productsLayout';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';
import Cart from './pages/cart/cart';
import Admin from './pages/admin/admin';
import ScrollUp from './sharedComponents/scrollUp';
import AppLoader from './sharedComponents/hoc/appLoader';
import ScrollToTop from './sharedComponents/scrollToTop';
import ProtectedRoute from './sharedComponents/hoc/protectedRoute';
import ProtectedRouteForAdmin from './sharedComponents/hoc/protectedRouteForAdmin';

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
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRouteForAdmin exact path="/admin/:productId?" component={Admin} />
        </Switch>
        <Footer />
      </AppLoader>
      <ToastContainer />
      <ScrollUp />
    </>
  );
};
export default App;
