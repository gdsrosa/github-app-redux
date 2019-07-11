import React from 'react';

const UserInfo = ({ photo, username, bio, location}) => {
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

export default UserInfo;
