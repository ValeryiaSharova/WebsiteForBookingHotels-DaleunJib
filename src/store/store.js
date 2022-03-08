import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './category';
import { logger } from './middleware/logger';
import questionsReducer from './questions';

const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  questions: questionsReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export default createStore;
