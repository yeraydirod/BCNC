import { CreateAlbumRepository } from '../../infrastructure/getAlbums.service';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../../../definitions/baseUrl'
import { mockAlbums } from './mockAlbums'

const mock = new MockAdapter(axios);

describe('getAlbums', () => {
  it('should fetch albums from the API', async () => {
    mock.onGet(`${baseUrl}/albums`).reply(200, mockAlbums);

    const albumRepository = CreateAlbumRepository();
    const result = await albumRepository.getAll();

    expect(result).toEqual(mockAlbums);
  });


  it('should fetch albums from the API filtered by userId', async () => {
    mock.onGet(`${baseUrl}/albums?userId=${mockAlbums[0].userId}`).reply(200, mockAlbums);

    const albumRepository = CreateAlbumRepository();
    const result = await albumRepository.get(mockAlbums[0].userId);

    expect(result).toEqual(mockAlbums);
  });


  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/albums`).reply(404, { error: 'Not Found' });
    const albumRepository = CreateAlbumRepository();

    await expect(albumRepository.getAll()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


  it('should handle errors gracefully with param', async () => {
    mock.onGet(`${baseUrl}/albums?userId=${mockAlbums[0].userId}`).reply(404, { error: 'Not Found' });
    const albumRepository = CreateAlbumRepository();

    await expect(albumRepository.get(mockAlbums[0].userId)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });

 
});

