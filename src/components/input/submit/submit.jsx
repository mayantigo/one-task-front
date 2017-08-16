import React, { PropTypes } from 'react';
import './submit.css';

const Submit = ({ id, text }) => <input id={id} type="submit" value={text} />;

Submit.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Submit;
