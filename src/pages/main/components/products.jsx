import React from 'react';
import product1 from '../../../assets/img/product1.png';
import product2 from '../../../assets/img/product2.png';
import product3 from '../../../assets/img/product3.png';
import product4 from '../../../assets/img/product4.png';
import product5 from '../../../assets/img/product5.png';
import product6 from '../../../assets/img/product6.png';

const Products = () => {
  return (
    <section className="product section container" id="products">
      <h2 className="section__title-center">
        Check out our <br /> products
      </h2>

      <p className="product__description">
        Here are some selected plants from our showroom, all are in excellent shape and has a long
        life span. Buy and enjoy best quality.
      </p>

      <div className="product__container grid">
        <article className="product__card">
          <div className="product__circle" />

          <img src={product1} alt="product1" className="product__img" />

          <h3 className="product__title">Cacti Plant</h3>
          <span className="product__price">$19.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>

        <article className="product__card">
          <div className="product__circle" />

          <img src={product2} alt="product2" className="product__img" />

          <h3 className="product__title">Cactus Plant</h3>
          <span className="product__price">$11.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>

        <article className="product__card">
          <div className="product__circle" />

          <img src={product3} alt="product3" className="product__img" />

          <h3 className="product__title">Aloe Vera Plant</h3>
          <span className="product__price">$7.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>

        <article className="product__card">
          <div className="product__circle" />

          <img src={product4} alt="product4" className="product__img" />

          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price">$5.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>

        <article className="product__card">
          <div className="product__circle" />

          <img src={product5} alt="product5" className="product__img" />

          <h3 className="product__title">Succulent Plant</h3>
          <span className="product__price">$10.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>

        <article className="product__card">
          <div className="product__circle" />

          <img src={product6} alt="product6" className="product__img" />

          <h3 className="product__title">Green Plant</h3>
          <span className="product__price">$8.99</span>

          <button className="button--flex product__button" type="button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
      </div>
    </section>
  );
};

export default Products;
