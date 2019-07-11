import React from 'react';
import { connect } from 'react-redux';

import { getUsername, getLocation, getBio, getUserPhoto } from '../ducks/User';

const UserInfo = ({ photo, username, bio, location }) => {
  return (
    <div>
      {photo ? (
        <div>
          <p>Photo</p>
          <img src={photo} style={{ width: 200, height: 200 }} />
        </div>
      ) : (
        ''
      )}
      <p>Username: {username}</p>
      <p>Bio: {bio}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  username: getUsername(state),
  photo: getUserPhoto(state),
  bio: getBio(state),
  location: getLocation(state),
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
