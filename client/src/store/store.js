import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './category';
import questionsReducer from './questions';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  questions: questionsReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export default createStore;
