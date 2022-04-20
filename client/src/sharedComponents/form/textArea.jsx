import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return `login__area login__content${error ? '-error' : ''}`;
  };

  return (
    <div className={getInputClasses()}>
      <textarea
        placeholder=" "
        className="login__input"
        type="text"
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

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextArea.defaultProps = {
  error: null,
};

export default TextArea;
