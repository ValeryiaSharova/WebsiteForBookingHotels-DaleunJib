import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './category';
import questionsReducer from './questions';
import usersReducer from './user';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  questions: questionsReducer,
  users: usersReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export default createStore;
