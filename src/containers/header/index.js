import { connect } from 'react-redux';

import Header from '../../components/header';

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  userName: state.login.userName,
});

export default connect(mapStateToProps, null)(Header);
