import { useContext } from 'react';

import { useFetchUser } from '@/hooks/useFetchUser';
import { UserContext } from '@/context/UserContext';

const UserInfo = () => {
  const { username } = useContext(UserContext);
  const { data } = useFetchUser(username);

  const { photo, bio, location, name, publicRepos } = data;

  return (
    <div className="user-info">
      {photo && (
        <div>
          <img className="user-info-img" src={photo} />
        </div>
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

export default UserInfo;
