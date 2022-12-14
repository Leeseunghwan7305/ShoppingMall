import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { getClient } from './queryClient';
import { routes } from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { worker } from './mocks/browser';
function App() {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  if (process.env.NODE_ENV === 'development') {
    worker.start();
  }

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
