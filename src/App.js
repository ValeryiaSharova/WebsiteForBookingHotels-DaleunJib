import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/main';
import Products from './pages/products/products';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/products" exact component={Products} />
      <Route path="/login" exact component={LogIn} />
    </Switch>
    <Footer />
  </>
);
export default App;
