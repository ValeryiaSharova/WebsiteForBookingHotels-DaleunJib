import { toast } from 'react-toastify';
import cartService from '../services/cart.service';

/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = { entity: null, isLoading: true, error: null, dataLoaded: false };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartRequested: state => {
      state.isLoading = true;
    },
    cartRecived: (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    cartRequestedFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    cartUpdated: (state, action) => {
      state.entity = action.payload;
    },
  },
});

const { actions, reducer: cartReducer } = cartSlice;
const { cartRequested, cartRecived, cartRequestedFailed, cartUpdated } = actions;

export const loadUserCart = id => async dispatch => {
  dispatch(cartRequested());
  try {
    const { content } = await cartService.getCart(id);
    dispatch(cartRecived(content[0]));
  } catch (error) {
    const { message } = error.response.data;
    dispatch(cartRequestedFailed(message));
  }
};

export const updateCart = (payload, action) => async dispatch => {
  try {
    const { content } = await cartService.updateCart(payload);
    if (action === 'add') {
      if (localStorage.getItem('selected-theme') === 'dark') {
        toast.success('Item was add', { theme: 'dark' });
      } else {
        toast.success('Item was add');
      }
    }
    dispatch(cartUpdated(content));
  } catch (error) {
    const { message } = error.response.data;
    dispatch(cartRequestedFailed(message));
  }
};

export const getUserCart = () => state => state.cart.entity;
export const getDataStatus = () => state => state.cart.dataLoaded;

export default cartReducer;
