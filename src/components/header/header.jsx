import React, { PropTypes } from 'react';
import Avatar from '../avatar';

import './header.css';

const Header = ({ loggedIn, userName, userAvatar }) => {
  if (loggedIn) {
    return (
      <header>
        Hello {userName}
        <Avatar imgUrl={userAvatar} />
      </header>
    );
  }

  return (
    <header>
      <div>My header</div>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
};

Header.defaultProps = {
  userName: '',
  userAvatar: '',
};

export default Header;
