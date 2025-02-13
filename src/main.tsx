import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import App from './App.js';

import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

const root = createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
