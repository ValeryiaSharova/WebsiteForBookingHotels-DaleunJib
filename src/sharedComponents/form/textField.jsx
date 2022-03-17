import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return `login__content${error ? '-error' : ''}`;
  };

  return (
    <div className={getInputClasses()}>
      <input
        placeholder=" "
        className="login__input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={name} className="login__label">
        {label}
      </label>
      {error && (
        <div className="login__error">
          <span className="login__error-message">{error}</span>
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  error: null,
};

export default TextField;
