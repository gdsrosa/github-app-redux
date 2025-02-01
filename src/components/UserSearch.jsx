import { useContext } from 'react';
import { useFetchUser } from '@/hooks/useFetchUser';
import { UserContext } from '@/context/UserContext';

const UserSearch = () => {
  const { username, setUsername } = useContext(UserContext);
  const { isLoading, error } = useFetchUser(username);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    setUsername(username);
  };

  if (isLoading) {
    return (
      <div className="user-search-loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-search-error">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="user-search">
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Type a Github username..."
          className="user-search-input"
          autoComplete="on"
        />
        <button type="submit" className="user-search-button">
          Find User!
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
