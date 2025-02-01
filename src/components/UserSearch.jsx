import { useContext } from 'react';

import { Button, TextField, Typography } from '@mui/material';

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
      <div>
        <Typography variant="p">Loading...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Typography variant="p">{error.message}</Typography>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Find User!
        </Button>
      </form>
    </div>
  );
};

export default UserSearch;
