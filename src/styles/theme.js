import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'Roboto',
    color: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
