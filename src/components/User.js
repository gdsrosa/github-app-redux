import React from 'react';
import { connect } from 'react-redux';

import {
  handleFetchUserAsync,
  getUsername,
  getLocation,
  getBio,
  getUserPhoto,
  getIfIsLoading,
  getError,
} from '../ducks/User';

const User = ({
  handleFetchUser,
  username,
  location,
  bio,
  photo,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return (
      <div style={{ color: '#f00' }}>
        <p>Oops, usuário não encontrado.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleFetchUser}>
        <input
          name="username"
          type="text"
          placeholder="Type a Github username..."
        />
        <button type="submit" style={{ marginLeft: 5 }}>
          Fetch User
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  username: getUsername(state),
  bio: getBio(state),
  location: getLocation(state),
  photo: getUserPhoto(state),
  isLoading: getIfIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => {
  return {
    handleFetchUser: e => {
      e.preventDefault();
      dispatch(handleFetchUserAsync(e.target.username.value));
      e.target.username.value = '';
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
