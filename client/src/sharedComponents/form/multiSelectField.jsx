/* eslint-disable no-underscore-dangle */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const MultiSelectField = ({ label, error, options, onChange, name, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map(optionName => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;
  const handleChange = value => {
    onChange({ name, value });
  };
  const getInputClasses = () => {
    return `basic-multi-select`;
  };
  return (
    <div>
      <label className="login__label-select">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={optionsArray}
        className={getInputClasses()}
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
        value={defaultValue}
        defaultValue={defaultValue}
      />

      {error && <div className="login__select-error">{error}</div>}
    </div>
  );
};

MultiSelectField.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.array.isRequired,
  error: PropTypes.string,
};

MultiSelectField.defaultProps = {
  error: null,
};

export default MultiSelectField;

/* 
     
      */
