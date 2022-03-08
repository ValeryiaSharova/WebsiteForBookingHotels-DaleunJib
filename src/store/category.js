/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import categoryService from '../services/category.service';

const initialState = { entities: null, isLoading: true, error: null };

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    recived(state, action) {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoryRequested(state) {
      state.isLoading = true;
    },
    categoryRequestedFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer: categoryReducer } = categorySlice;
const { recived, categoryRequested, categoryRequestedFailed } = actions;

export const loadCategory = () => async dispatch => {
  dispatch(categoryRequested());
  try {
    const { content } = await categoryService.get();
    dispatch(recived(content));
  } catch (error) {
    dispatch(categoryRequestedFailed(error.message));
  }
};

export const getCategory = () => state => state.category.entities;
export const getCategoryLoadingStatus = () => state => state.category.isLoading;
export const getCategoryError = () => state => state.category.error;

export default categoryReducer;
