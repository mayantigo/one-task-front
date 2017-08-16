import { connect } from 'react-redux';

import Login from '../../pages/login';
import { login } from '../../actions/login';

const mapDispatchToProps = dispatch => ({
  login(email, password) {
    dispatch(login(email, password));
  },
});

const mapStateToProps = state => ({
  error: state.login.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
