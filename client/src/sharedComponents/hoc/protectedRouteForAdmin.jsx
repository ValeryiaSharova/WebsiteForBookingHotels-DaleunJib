/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserRole } from '../../services/localStorage.service';

const ProtectedRouteForAdmin = ({ component: Component, children, ...rest }) => {
  const isAdmin = getUserRole();
  return (
    <Route
      {...rest}
      render={props => {
        if (isAdmin !== 'admin') {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

ProtectedRouteForAdmin.propTypes = {
  component: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  location: PropTypes.object,
};

ProtectedRouteForAdmin.defaultProps = {
  children: null,
  location: null,
};

export default ProtectedRouteForAdmin;
