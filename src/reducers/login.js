import { LOGIN, LOGIN_INCORRECT } from '../actions/login';

const login = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        error: false,
        userName: action.payload.userName,
      };
    case LOGIN_INCORRECT:
      return { ...state, loggedIn: false, error: true };
    default:
      return state;
  }
};

export default login;
