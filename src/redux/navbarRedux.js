// selectors
export const logIn = ({ login }) => login;

// action name creator
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const LOGIN_OUT = createActionName('LOGIN_OUT');

// action creators
export const createActionLogInOut = payload => ({
  payload: {
    loggedIn: true,
  },
  type: 'LOGIN_OUT',
});

// reducer
export function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOGIN_OUT:
      return {
        ...statePart,
        login: action.payload,
      };
    default:
      return statePart;
  }
}
