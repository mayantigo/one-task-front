import React from 'react';
import PropTypes from 'prop-types';

const WeekDay = ({ name, onSelect }) => {
  const select = event => onSelect(event);
  return (
    <a onClick={select} role="link">
      {name}
    </a>
  );
};

WeekDay.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default WeekDay;
