import React from 'react';
import { connect } from 'react-redux';

import {
  getUsername,
  getLocation,
  getBio,
  getUserPhoto,
  getName,
} from 'ducks/User';

const UserInfo = ({ photo, username, bio, location, name }) => {
  return (
    <div className="user-info">
      {photo ? (
        <div>
          <p>Photo</p>
          <img className="user-info-img" src={photo} />
        </div>
      ) : (
        ''
      )}
      <div className="user-info-child">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Bio: {bio ? bio : 'This user has no bio.'}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  username: getUsername(state),
  photo: getUserPhoto(state),
  bio: getBio(state),
  location: getLocation(state),
  name: getName(state),
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
