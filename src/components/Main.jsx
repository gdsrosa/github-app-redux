import { useContext } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { UserContext } from '@/context/UserContext';
import UserSearch from './UserSearch';
import UserInfo from './UserInfo';

const Main = () => {
  const { username } = useContext(UserContext);
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom sx={{ marginY: 2 }}>
        Github User Finder
      </Typography>
      <Box>
        <UserSearch />
        {username && <UserInfo />}
      </Box>
    </Container>
  );
};

export default Main;
