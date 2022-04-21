import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import './assets/scss/styles.scss';
import createStore from './store/store';
import history from './utilits/history';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Router history={history}>
          <App />
        </Router>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
