import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './pages/main/main';
import Products from './pages/products/products';
import LogIn from './pages/logIn/login';
import Footer from './sharedComponents/footer';
import Header from './sharedComponents/header';
import ScrollUp from './sharedComponents/scrollUp';
import configureStore from './store/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/products" exact component={Products} />
      <Route path="/login" exact component={LogIn} />
    </Switch>
    <Footer />
    <ScrollUp />
  </Provider>
);
export default App;
