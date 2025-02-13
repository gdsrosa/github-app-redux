import { useContext } from 'react';
import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
  useColorScheme,
} from '@mui/material';
import { UserContext } from '@/context/UserContext';
import UserSearch from './UserSearch';
import UserInfo from './UserInfo';

const Main = () => {
  const { username } = useContext(UserContext);
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const { checked } = event.target;
    const theme = checked ? 'dark' : 'light';
    setMode(theme);
  };

  return (
    <Container maxWidth="sm">
      <FormGroup>
        <FormControlLabel
          control={<Switch name="theme" onChange={handleChange} />}
          label={mode && `Theme ${mode}`}
        />
      </FormGroup>
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
