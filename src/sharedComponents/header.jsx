import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <i className="ri-leaf-line nav__logo-icon" /> Plantex
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/products"
                className="nav__link"
                activeClassName="active-link"
              >
                Products
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/login"
                className="nav__link"
                activeClassName="active-link"
              >
                LogIn
              </NavLink>
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
