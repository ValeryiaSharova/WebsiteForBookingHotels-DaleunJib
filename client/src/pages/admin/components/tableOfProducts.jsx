/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../../store/category';
import { deleteProduct, getProducts } from '../../../store/products';
import history from '../../../utilits/history';

const TableOfProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts());
  const categories = useSelector(getCategory());
  const handleDelete = id => {
    dispatch(deleteProduct(id));
  };
  const handleEdit = id => {
    history.push(`/admin/${id}`);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Categories</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td className="table__info">{product.name}</td>
            <td className="table__info">{product.price}</td>
            <td className="table__info table__info-category">
              {product.categories.map(p => (
                <span className="product__category" key={p}>
                  {categories.find(c => c._id === p).name}
                </span>
              ))}
            </td>
            <td>
              <button
                className="button button--flex"
                type="button"
                onClick={() => handleEdit(product._id)}
              >
                <i className="ri-pencil-line" />
              </button>
            </td>
            <td>
              <button
                className="button button--flex"
                type="button"
                onClick={() => handleDelete(product._id)}
              >
                <i className="ri-close-line" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOfProducts;
