import React from 'react';
import home from '../../../assets/img/home.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <img src={home} alt="" className="home__img" />

        <div className="home__data">
          <h1 className="home__title">
            Plants will make <br /> your life better
          </h1>
          <p className="home__description">
            Create incredible plant design for your offices or apastaments. Add fresness to your new
            ideas.
          </p>
          <a href="#about" className="button button--flex">
            Explore <i className="ri-arrow-right-down-line button__icon" />
          </a>
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>

          <div className="home__social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="ri-facebook-fill" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="ri-twitter-fill" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
