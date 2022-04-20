/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import productService from '../services/product.service';

const initialState = { entities: null, isLoading: true, error: null, dataLoaded: false };

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    recived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    productsRequested: state => {
      state.isLoading = true;
    },
    productsRequestedFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    productCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    productDeleted: (state, action) => {
      state.entities = state.entities.filter(p => p._id !== action.payload);
    },
    productUpdated: (state, action) => {
      state.entities = state.entities.map(p =>
        p._id === action.payload._id ? { ...action.payload } : p
      );
      state.isLoading = false;
    },
  },
});

const { actions, reducer: productsReducer } = productSlice;

const {
  recived,
  productsRequested,
  productsRequestedFailed,
  productCreated,
  productDeleted,
  productUpdated,
} = actions;

export const loadProducts = () => async dispatch => {
  dispatch(productsRequested());
  try {
    const { content } = await productService.get();
    dispatch(recived(content));
  } catch (error) {
    const { message } = error.response.data;
    dispatch(productsRequestedFailed(message));
  }
};

export const createProduct = payload => async dispatch => {
  try {
    const { content } = await productService.createProduct(payload);
    dispatch(productCreated(content));
    if (localStorage.getItem('selected-theme') === 'dark') {
      toast.success('Created!', { theme: 'dark' });
    } else {
      toast.success('Created!');
    }
  } catch (error) {
    const { message } = error.response.data;
    dispatch(productsRequestedFailed(message));
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    const { content } = await productService.deleteProduct(id);
    if (!content) {
      dispatch(productDeleted(id));
    }
  } catch (error) {
    const { message } = error.response.data;
    dispatch(productsRequestedFailed(message));
  }
};

export const updateProduct = payload => async dispatch => {
  dispatch(productsRequested());
  try {
    const { content } = await productService.updateProduct(payload);
    dispatch(productUpdated(content));
  } catch (error) {
    const { message } = error.response.data;
    dispatch(productsRequestedFailed(message));
  }
};

export const getProducts = () => state => state.products.entities;
export const getProductsLoadingStatus = () => state => state.products.isLoading;
export const getProductsError = () => state => state.products.error;
export const getFirstProducts = () => state => {
  if (state.products.entities) {
    return state.products.entities.filter((el, index) => index <= 5);
  }
  return [];
};
export const getProductById = productId => state =>
  state.products.entities.find(p => p._id === productId);
export const getDataStatus = () => state => state.products.dataLoaded;

export default productsReducer;
