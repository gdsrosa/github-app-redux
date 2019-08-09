// Actions
const Types = {
  FETCH_USER: 'user/FETCH_USER',
  FETCH_USER_SUCCESS: 'user/FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'user/FETCH_USER_FAILURE',
};

// Reducer
const initialState = {
  username: '',
  bio: '',
  location: '',
  photo: null,
  name: '',
  isLoading: false,
  error: '',
  displayData: false,
  publicRepos: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USER:
      return { ...state, isLoading: true };
    case Types.FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        displayData: true,
      };
    case Types.FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

//Action Creators
export const handleFetchUser = () => ({
  type: Types.FETCH_USER,
});

export const handleFetchUserSuccess = (
  username,
  location,
  photo,
  bio,
  name,
  publicRepos
) => ({
  type: Types.FETCH_USER_SUCCESS,
  payload: {
    username,
    location,
    photo,
    bio,
    name,
    publicRepos,
  },
});

export const handleFetchUserFailure = error => ({
  type: Types.FETCH_USER_FAILURE,
  payload: {
    error,
  },
});

export const handleFetchUserAsync = username => {
  return async dispatch => {
    dispatch(handleFetchUser());
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      dispatch(
        handleFetchUserSuccess(
          data.login,
          data.location,
          data.avatar_url,
          data.bio,
          data.name,
          data.public_repos
        )
      );
    } catch (e) {
      console.error('Err', e);
      dispatch(handleFetchUserFailure(e));
    }
  };
};

// Selectors
export const getName = state => state.name;
export const getUsername = state => state.username;
export const getLocation = state => state.location;
export const getBio = state => state.bio;
export const getIfIsLoading = state => state.isLoading;
export const getError = state => state.error;
export const getUserPhoto = state => state.photo;
export const getDisplayData = state => state.displayData;
export const getPublicRepos = state => state.publicRepos;
