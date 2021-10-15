import Axios from 'axios';
import { api, API_URL } from '../settings';

/* selectors */
export const getRequest = ({ posts }, name) => posts.requests[name];
export const getAll = ({ posts }) => posts.data;
export const getLoadingState = ({ posts }) => posts.loading;
export const getPostsForAnnouncements = ({ posts }, postId) =>
  posts.data.filter(post => post.listId === postId);

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const EDIT_POST = createActionName('EDIT_POST');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_POST = createActionName('ADD_POST');
export const LOAD_POST = createActionName('LOAD_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addPost = payload => ({ payload, type: ADD_POST });
export const loadPost = payload => ({ payload, type: LOAD_POST });
export const editPost = payload => ({ payload, type: EDIT_POST });
export const getPostById = ({ posts }, postId) => {
  const filtered = posts.filter(post => new RegExp(postId.test(post.id)));

  return filtered.length ? filtered[0] : { error: true };
};

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    const state = getState();
    // console.log(state);

    if (state.posts.data && state.posts.loading.active) {
      Axios.get('http://localhost:8000/api/posts')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const addPostRequest = data => {
  return async dispatch => {
    dispatch(startRequest({ name: ADD_POST }));
    try {
      let res = await Axios.post(`${API_URL}/posts`, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      dispatch(addPost(res.data));
      dispatch(endRequest({ name: ADD_POST }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_POST, error: e.message }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: { pending: false, error: null, success: true },
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            pending: false,
            error: action.payload.message,
            success: false,
          },
        },
      };
    }
    case ADD_POST: {
      return { ...statePart, data: [...statePart.data, action.payload] };
    }
    case EDIT_POST: {
      return {
        ...statePart,
        editMode: action.payload,
      };
    }
    default:
      return statePart;
  }
};
