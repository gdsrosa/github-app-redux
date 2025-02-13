import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    primary: {
      main: blue[600],
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
