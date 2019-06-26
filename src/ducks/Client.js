// Actions
const Types = {
  FETCH_USER: 'client/FETCH_USER',
  FETCH_USER_SUCCESS: 'client/FETCH_USER_SUCCESS',
};

// Reducer
const initialState = {
  username: '',
  jobTitle: '',
  location: '',
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USER:
      return { ...state, isLoading: true };
    case Types.FETCH_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        jobTitle: action.payload.jobTitle,
        location: action.payload.location,
      };
    default:
      return { ...state };
  }
};

//Action Creators
export const handleFetchUser = () => ({
  type: Types.FETCH_USER,
});
