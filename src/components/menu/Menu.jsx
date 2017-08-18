import React, { PropTypes } from 'react';
import Avatar from '../avatar';

const Menu = ({ avatar }) =>
  (
    <nav>
      <Avatar imgUrl={avatar} />
    </nav>
  );

Menu.propTypes = {
  avatar: PropTypes.string.isRequired,
};
export default Menu;
