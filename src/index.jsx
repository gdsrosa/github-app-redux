import { createRoot } from 'react-dom/client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
