import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react';

import AlbumList from './AlbumList';

// Mockear la función getAllAlbums para evitar llamadas reales a la API durante las pruebas
jest.mock('../../main/albums/applications/getAllAlbums', () => ({
  getAllAlbums: jest.fn(() => Promise.resolve([
    { id: 1, title: 'Album1' },
    { id: 2, title: 'Album2' },
  ])),
}));

test('AlbumList renders correctly with albums', async () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <AlbumList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.getByText('Album1')).toBeInTheDocument());
  expect(screen.getByText('Album2')).toBeInTheDocument();
});

test('AlbumList renders correctly with no albums', async () => {
  jest.mock('../../main/albums/applications/getAllAlbums', () => ({
    getAllAlbums: jest.fn(() => Promise.resolve([])),
  }));

  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <AlbumList />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.queryByText('Album1')).toBeNull());
  expect(screen.queryByText('Album2')).toBeNull();
});
