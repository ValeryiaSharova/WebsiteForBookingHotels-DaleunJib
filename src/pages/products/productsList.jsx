/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Accordeon from '../../sharedComponents/accordeon';
import ProductCard from '../../sharedComponents/productCard';
import { getCategory, getCategoryError, getCategoryLoadingStatus } from '../../store/category';
import { getProducts, getProductsError, getProductsLoadingStatus } from '../../store/products';

const ProductsList = () => {
  const productsState = useSelector(getProducts());
  const productsError = useSelector(getProductsError());
  const productsLoading = useSelector(getProductsLoadingStatus());
  const categoryState = useSelector(getCategory());
  const categoryError = useSelector(getCategoryError());
  const categoryLoading = useSelector(getCategoryLoadingStatus());

  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();

  const handleSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  function searchProducts(data) {
    if (data) {
      if (selectedCategory) {
        const newData = [];
        data.forEach(p => {
          if (p.category.includes(selectedCategory)) {
            newData.push(p);
          }
        });
        return newData.filter(product =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      return data.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return [];
  }

  const products = searchProducts(productsState);

  if (productsLoading || categoryLoading) {
    return (
      <section className="product section container" id="products">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (productsError || categoryError) {
    return (
      <section className="product section container">
        <h3>{productsError || categoryError}</h3>
      </section>
    );
  }

  return (
    <section className="product section container">
      <h2 className="section__title-center">Our products</h2>
      <div className="footer__subscribe">
        <input
          type="text"
          placeholder="Enter plant name..."
          className="footer__input"
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <div>
        <Accordeon
          title="Categories"
          content="Choose one category"
          categoryProduct={categoryState}
          onCategorySelected={handleCategorySelect}
        />
      </div>
      <div className="product__container grid">
        {products.map(product => (
          <ProductCard categoryState={categoryState} product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
