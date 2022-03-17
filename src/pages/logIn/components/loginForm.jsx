import React from 'react';

const LoginForm = () => {
  return (
    <form action="" className="login__form">
      <div className="login__inputs">
        <div className="login__content">
          <input type="email" placeholder=" " className="login__input" />
          <label htmlFor="1" className="login__label">
            Email
          </label>
        </div>

        <div className="login__content">
          <input type="text" placeholder=" " className="login__input" />
          <label htmlFor="1" className="login__label">
            Password
          </label>
        </div>
      </div>

      <button className="button button--flex" type="button">
        Sign In
        <i className="ri-arrow-right-up-line button__icon" />
      </button>
    </form>
  );
};

export default LoginForm;
