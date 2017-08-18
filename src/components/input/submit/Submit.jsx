import React from 'react';
import { PropTypes } from 'prop-types';
import './submit.css';

const Submit = ({ id, text }) => <input id={id} type="submit" value={text} />;

Submit.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Submit;
