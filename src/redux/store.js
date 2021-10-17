import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { initialState } from './initialState';
import { reducer as navbarRedux } from './navbarRedux';
import { reducer as postsReducer } from './postsRedux';

// initial state
export const initialState = {
  posts: {
    editMode: false,
    data: [],
    loading: {
      active: false,
      error: false,
    },
    requests: [],
  },
  login: { loggedIn: false, email: 'example2@gmail.com', admin: false },
  facebookUsers: [],
};

// define reducers
const reducers = {
  posts: postsReducer,
  login: navbarRedux,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
