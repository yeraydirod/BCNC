import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../definitions/baseUrl'
import { getAlbums } from '../getAlbums';
import { mockAlbums } from './mockAlbums'

const mock = new MockAdapter(axios);

describe('getAlbums', () => {
  it('should fetch albums from the API', async () => {
    mock.onGet(`${baseUrl}/albums`).reply(200, mockAlbums);

    const result = await getAlbums();

    expect(result).toEqual(mockAlbums);
  });


  it('should fetch albums from the API filtered by userId', async () => {
    mock.onGet(`${baseUrl}/albums/${mockAlbums[0].userId}`).reply(200, mockAlbums);

    const result = await getAlbums();

    expect(result).toEqual(mockAlbums);
  });


  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/albums`).reply(404, { error: 'Not Found' });
  
    await expect(getAlbums()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


  it('should handle errors gracefully with param', async () => {
    mock.onGet(`${baseUrl}/albums/${mockAlbums[0].userId}`).reply(404, { error: 'Not Found' });
  
    await expect(getAlbums(mockAlbums[0].userId)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });

 
});
