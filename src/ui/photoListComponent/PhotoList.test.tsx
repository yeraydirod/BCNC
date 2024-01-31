import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';

import PhotoList from './PhotoList';

jest.mock('../../main/photos/applications/getAllPhotos', () => ({
  getAllPhotos: jest.fn(() => Promise.resolve([
    { id: 1, title: 'Photo1' },
    { id: 2, title: 'Photo2' },
  ])),
}));

test('PhotoList renders correctly with photos', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <PhotoList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.getByText('Photo1')).toBeInTheDocument());
  expect(screen.getByText('Photo2')).toBeInTheDocument();
});

test('PhotoList renders correctly with no photos', async () => {
  jest.mock('../../main/photos/applications/getAllPhotos', () => ({
    getAllPhotos: jest.fn(() => Promise.resolve([])),
  }));

  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <PhotoList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.queryByText('Photo1')).toBeNull());
  expect(screen.queryByText('Photo2')).toBeNull();
});
