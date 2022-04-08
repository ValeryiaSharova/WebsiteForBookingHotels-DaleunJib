/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default-member */
import { createSlice, createAction } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import history from '../utilits/history';
import generateAuthError from '../utilits/generateAuthError';

const initialState = localStorageService.getAccessToken()
  ? {
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      /* entities: null,
      isLoading: true,
      error: null,
      
      dataLoaded: false, */
    }
  : {
      auth: null,
      isLoggedIn: false,
      /* entities: null,
      isLoading: false,
      error: null,
      
      dataLoaded: false, */
    };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userLoggedOut: state => {
      state.auth = null;
      state.isLoggedIn = false;
    },
  },
});

const { actions, reducer: usersReducer } = userSlice;
const { authRequestSuccess, authRequestFailed, userLoggedOut } = actions;

const authRequested = createAction('users/authRequested');

export const signUp = payload => async dispatch => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    history.push('/');
  } catch (error) {
    const { message } = error.response.data;
    if (error.response.status === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(message));
    }
  }
};

export const signIn =
  ({ email, password, redirect }) =>
  async dispatch => {
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.userId }));
      history.push(redirect);
    } catch (error) {
      const { message } = error.response.data;
      if (error.response.status === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(message));
      }
    }
  };

export const logOut = () => dispatch => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push('/');
};

export const getAuthError = () => state => state.users.error;
export const getIsLoggedIn = () => state => state.users.isLoggedIn;

export default usersReducer;
