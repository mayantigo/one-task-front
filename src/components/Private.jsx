import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { logged } from '../session';

const Private = ({ component, path }) => {
  if (logged()) {
    return <Route component={component} path={path} />;
  }

  return <Redirect to="/login" />;
};

Private.propTypes = {
  component: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

export default Private;
