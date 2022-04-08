/* eslint-disable import/no-named-as-default-member */
import axios from 'axios';
import config from '../config.json';
import localStorageService from './localStorage.service';

const httpAuth = axios.create({
  baseURL: `${config.apiEndPoint}/auth/`,
});

const authService = {
  register: async payload => {
    const { data } = await httpAuth.post('signUp', {
      ...payload,
      returnSecureToken: true,
    });
    return data;
  },
  login: async ({ email, password }) => {
    const { data } = await httpAuth.post('signInWithPassword', {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;
