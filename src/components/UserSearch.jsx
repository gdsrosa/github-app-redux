import { useContext } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

import { useFetchUser } from '@/hooks/useFetchUser';
import { UserContext } from '@/context/UserContext';

const UserSearch = () => {
  const { username, setUsername } = useContext(UserContext);
  const { error } = useFetchUser(username);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    setUsername(username);
  };

  if (error) {
    return (
      <div>
        <Typography variant="p">{error.message}</Typography>
      </div>
    );
  }

  return (
    <div>
      <Box component="form" onSubmit={handleSubmit} marginBottom={2}>
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" fullWidth sx={{ marginY: 1 }}>
          Find User!
        </Button>
      </Box>
    </div>
  );
};

export default UserSearch;
