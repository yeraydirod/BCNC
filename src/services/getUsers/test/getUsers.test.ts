import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../definitions/baseUrl'
import { getUsers } from '../getUsers';
import { mockUsers } from './mockUsers'

const mock = new MockAdapter(axios);

describe('getUsers', () => {
    it('should fetch users from the API', async () => {
    
    mock.onGet(`${baseUrl}/users`).reply(200, mockUsers);

    const result = await getUsers();

    expect(result).toEqual(mockUsers);
  });

  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/users`).reply(404, { error: 'Not Found' });
  
    await expect(getUsers()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });
  

});
