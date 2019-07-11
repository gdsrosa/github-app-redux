import React from 'react';
import { connect } from 'react-redux';

import { handleFetchUserAsync, getIfIsLoading, getError } from '../ducks/User';

const UserSearch = ({ handleFetchUser, isLoading, error }) => {
  if (isLoading) {
    return <div className="user-search-loading">Loading...</div>;
  } else if (error) {
    return (
      <div className="user-search-error">
        <p>Oops, usuário não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="user-search">
      <form onSubmit={handleFetchUser}>
        <input
          name="username"
          type="text"
          placeholder="Type a Github username..."
          className="user-search-input"
        />
        <button type="submit" className="user-search-button">
          Fetch User
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
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
)(UserSearch);
