import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const logged = () => localStorage.getItem('token') === true;

const Private = ({ component, path }) => {
  if (logged()) {
    return <Route component={component} path={path} />;
  }

  return <Redirect to="/login" />;
};

Private.propTypes = {
  component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default Private;
