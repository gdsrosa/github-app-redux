import React from 'react';
import { connect } from 'react-redux';

import {
  getUsername,
  getLocation,
  getBio,
  getUserPhoto,
  getName,
  getPublicRepos,
} from 'ducks/User';

const UserInfo = ({ photo, username, bio, location, name, publicRepos }) => {
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
        {bio ? <p>Bio: {bio} </p> : 'This user has no bio'}
        <p>Location: {location}</p>
        <p>Repos: {publicRepos}</p>
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
  publicRepos: getPublicRepos(state),
});

export default connect(
  mapStateToProps,
  null
)(UserInfo);
