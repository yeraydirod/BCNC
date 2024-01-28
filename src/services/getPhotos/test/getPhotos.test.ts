import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../definitions/baseUrl'
import { getPhotos } from '../getPhotos';
import { mockPhotos } from './mockPhotos'

const mock = new MockAdapter(axios);

describe('getPhotos', () => {
  it('should fetch photos from the API', async () => {

    mock.onGet(`${baseUrl}/photos`).reply(200, mockPhotos);

    const result = await getPhotos();

    expect(result).toEqual(mockPhotos);
  });


  it('should fetch photos from the API filtered by albumId', async () => {

    mock.onGet(`${baseUrl}/photos/${mockPhotos[0].albumId}`).reply(200, mockPhotos);

    const result = await getPhotos();

    expect(result).toEqual(mockPhotos);
  });

  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/photos`).reply(404, { error: 'Not Found' });
  
    await expect(getPhotos()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


  it('should handle errors gracefully with param', async () => {
    mock.onGet(`${baseUrl}/photos/${mockPhotos[0].albumId}`).reply(404, { error: 'Not Found' });
  
    await expect(getPhotos(mockPhotos[0].albumId)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


});
