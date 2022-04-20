import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from '../../store/user';

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  location: PropTypes.object,
};

ProtectedRoute.defaultProps = {
  children: null,
  location: null,
};

export default ProtectedRoute;
