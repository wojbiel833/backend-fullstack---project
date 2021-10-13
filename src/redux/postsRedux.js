/* selectors */
export const getAll = ({ posts }) => posts.data;
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

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const editPost = payload => ({ payload, type: EDIT_POST });

export const getPostById = ({ posts }, postId) => {
  const filtered = posts.filter(post => new RegExp(postId.test(post.id)));

  return filtered.length ? filtered[0] : { error: true };
};

/* thunk creators */

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
