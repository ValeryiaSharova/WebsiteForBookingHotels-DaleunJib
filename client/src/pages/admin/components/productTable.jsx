import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../../sharedComponents/form/form';
import TableOfProducts from './tableOfProducts';

const ProductTable = () => {
  const { productId } = useParams();

  return productId ? <Form type="edit" productId={productId} /> : <TableOfProducts />;
};

export default ProductTable;
