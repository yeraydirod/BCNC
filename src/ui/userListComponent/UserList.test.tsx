import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';

import UserList from './UserList';

test('UserList renders correctly with users', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.getByText('User1')).toBeInTheDocument());
  expect(screen.getByText('User2')).toBeInTheDocument();
});

test('UserList renders correctly with no users', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.queryByText('User1')).toBeNull());
  expect(screen.queryByText('User2')).toBeNull();
});
