/* eslint-disable no-underscore-dangle */
import httpService from './http.service';

const productEndPoint = 'products/';

const productService = {
  get: async () => {
    const { data } = await httpService.get(productEndPoint);
    return data;
  },
  createProduct: async payload => {
    const { data } = await httpService.post(productEndPoint, payload);
    return data;
  },
  deleteProduct: async productId => {
    const { data } = await httpService.delete(productEndPoint + productId);
    return data;
  },
  updateProduct: async payload => {
    const { data } = await httpService.patch(productEndPoint + payload._id, payload);
    return data;
  },
};

export default productService;
