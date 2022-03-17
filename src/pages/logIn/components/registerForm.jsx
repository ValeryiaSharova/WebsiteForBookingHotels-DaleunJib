/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import TextField from '../../../sharedComponents/form/textField';

const RegisterForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required('Password is required')
      .matches(/(?=.*[0-9])/, 'Password must consist a number')
      .min(8, 'Password must be at least 8 characters long'),
    email: yup.string().required('Email is required').email('Email entered incorrectly'),
    name: yup.string().required('Name is required'),
  });

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch(err => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = target => {
    setData(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  useEffect(() => {
    validate();
  }, [data]);

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__inputs">
        <TextField
          label="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
      </div>
      {}
      <button className="button button--flex" type="submit">
        Sign Up
        <i className="ri-arrow-right-up-line button__icon" />
      </button>
    </form>
  );
};

export default RegisterForm;
