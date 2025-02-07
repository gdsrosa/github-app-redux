import { useContext } from 'react';

import { useFetchUser } from '@/hooks/useFetchUser';
import { UserContext } from '@/context/UserContext';
import {
  Box,
  Card,
  CardMedia,
  Stack,
  styled,
  CardContent,
  CircularProgress,
} from '@mui/material';

const Paragraph = styled('p')(({ theme }) => ({
  ...theme.typography.body1,
  marginTop: 1,
}));

const UserInfo = () => {
  const { username } = useContext(UserContext);
  const { data, isLoading } = useFetchUser(username);

  const { photo, bio, location, name, publicRepos } = data;

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Stack spacing={3}>
      <Card raised sx={{ display: 'flex' }}>
        <Box component="section" maxWidth="sm" sx={{ padding: 2 }}>
          <CardContent>
            <Paragraph>
              <strong>Name</strong>: {name}
            </Paragraph>
            <Paragraph>
              <strong>Username</strong>: {username}
            </Paragraph>
            {bio ? (
              <Paragraph>
                <strong>Bio</strong>: {bio}{' '}
              </Paragraph>
            ) : (
              <Paragraph>This user has no bio</Paragraph>
            )}
            <Paragraph>
              <strong>Location</strong>: {location}
            </Paragraph>
            <Paragraph>
              <strong>Repos</strong>: {publicRepos}
            </Paragraph>
          </CardContent>
        </Box>
        {photo && <CardMedia component="img" src={photo} sx={{ width: 200 }} />}
      </Card>
    </Stack>
  );
};

export default UserInfo;
