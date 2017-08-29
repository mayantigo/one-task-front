import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Text,
  Password,
  Submit,
} from '../../components/input';
import Error from '../../components/error';

const Login = ({ login, error }) => {
  const submit = (event) => {
    event.preventDefault();
    login(this.email.state.value, this.password.state.value);
  };

  return (
    <section id="login">
      {(error ? <Error message="Invalid user/password" /> : null)}
      <form onSubmit={submit}>
        <Text
          name="email"
          placeholder="your@email.com"
          ref={
            (input) => { this.email = input; }
          }
          validate={value => (value !== undefined && value !== '')}
        />
        <Password
          name="password"
          placeholder="Password"
          ref={
            (input) => { this.password = input; }
          }
          validate={value => (value !== undefined && value !== '')}
        />
        <Submit id="submit" text="Login" />
      </form>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Login;
