import { CreatePhotoRepository } from '../../infrastructure/getPhotos.service';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../../../definitions/baseUrl'
import { mockPhotos } from './mockPhotos'

const mock = new MockAdapter(axios);

describe('getPhotos', () => {
  it('should fetch photos from the API', async () => {

    mock.onGet(`${baseUrl}/photos`).reply(200, mockPhotos);

    const photoRepository = CreatePhotoRepository();
    const result = await photoRepository.getAll();

    expect(result).toEqual(mockPhotos);
  });


  it('should fetch photos from the API filtered by albumId', async () => {

    mock.onGet(`${baseUrl}/photos?albumId=${mockPhotos[0].albumId}`).reply(200, mockPhotos);

    const photoRepository = CreatePhotoRepository();
    const result = await photoRepository.get(mockPhotos[0].albumId);

    expect(result).toEqual(mockPhotos);
  });

  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/photos`).reply(404, { error: 'Not Found' });

    const photoRepository = CreatePhotoRepository();
  
    await expect(photoRepository.getAll()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


  it('should handle errors gracefully with param', async () => {
    mock.onGet(`${baseUrl}/photos?albumId=${mockPhotos[0].albumId}`).reply(404, { error: 'Not Found' });

    const photoRepository = CreatePhotoRepository();
  
    await expect(photoRepository.get(mockPhotos[0].albumId)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });


});
