import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './category';
import questionsReducer from './questions';
import userReducer from './user';
import cartReducer from './cart';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  questions: questionsReducer,
  user: userReducer,
  cart: cartReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export default createStore;
