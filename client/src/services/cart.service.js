/* eslint-disable no-underscore-dangle */
import httpService from './http.service';

const cartEndPoint = 'cart/';

const cartService = {
  getCart: async userId => {
    const { data } = await httpService.get(cartEndPoint + userId);
    return data;
  },
  updateCart: async payload => {
    const { data } = await httpService.patch(cartEndPoint + payload._id, payload);
    return data;
  },
};

export default cartService;
