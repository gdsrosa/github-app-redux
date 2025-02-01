import { useState } from 'react';

import UserSearch from './UserSearch';
import UserInfo from './UserInfo';
import Footer from './Footer';
import { UserContext } from '@/context/UserContext';
import { Box, Container, Typography } from '@mui/material';

const Main = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          Github User Finder
        </Typography>
        <Box>
          <UserSearch />
          {username && <UserInfo />}
          <Footer />
        </Box>
      </Container>
    </UserContext.Provider>
  );
};

export default Main;
