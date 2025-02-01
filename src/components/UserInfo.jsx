import { useContext } from 'react';

import { useFetchUser } from '@/hooks/useFetchUser';
import { UserContext } from '@/context/UserContext';
import { Box, Card, CardMedia, Stack, Typography } from '@mui/material';

const UserInfo = () => {
  const { username } = useContext(UserContext);
  const { data } = useFetchUser(username);

  const { photo, bio, location, name, publicRepos } = data;

  return (
    <Stack spacing={2} direction="row">
      <Card sx={{ width: '100%' }}>
        {photo && <CardMedia component="img" image={photo} />}
      </Card>
      <Box>
        <Typography variant="p">Name: {name}</Typography>
        <Typography variant="p">Username: {username}</Typography>
        {bio ? (
          <Typography variant="p">Bio: {bio} </Typography>
        ) : (
          'This user has no bio'
        )}
        <Typography variant="p">Location: {location}</Typography>
        <Typography variant="p">Repos: {publicRepos}</Typography>
      </Box>
    </Stack>
  );
};

export default UserInfo;
