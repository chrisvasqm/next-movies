'use client'

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider