import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { getClient } from './queryClient';
import { routes } from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
