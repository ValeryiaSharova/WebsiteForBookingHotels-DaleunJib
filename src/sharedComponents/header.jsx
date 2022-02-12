import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i className="ri-leaf-line nav__logo-icon" /> Plantex
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/products" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="/signin" className="nav__link">
                SignIn
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line" />
          </div>
        </div>

        <div className="nav__btns">
          <i className="ri-moon-line change-theme" id="theme-button" />
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
