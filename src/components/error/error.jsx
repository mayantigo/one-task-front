import React, { PropTypes } from 'react';
import './error.css';

const Error = ({ message }) =>
  (
    <div className="error">
      <div>
        {message}
      </div>
    </div>
  );

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
