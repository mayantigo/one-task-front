import React, { PropTypes } from 'react';

const Avatar = ({ imgUrl }) => <img src={imgUrl} alt={imgUrl} />;

Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Avatar;
