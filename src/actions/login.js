export const LOGIN = 'LOGIN';
export const LOGIN_INCORRECT = 'LOGIN_INCORRECT';

export const login = (email, password) => {
  const logged = email === 'hola' && password === 'adios';
  if (logged) {
    localStorage.setItem('token', 'abcd');
  }

  return {
    type: logged === true ? LOGIN : LOGIN_INCORRECT,
    payload: {
      logged,
      userName: email,
    },
  };
};
