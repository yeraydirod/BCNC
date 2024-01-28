import { CreateUserRepository } from '../getUsers.service';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { baseUrl } from '../../../../definitions/baseUrl'
import { mockUsers } from './mockUsers'

const mock = new MockAdapter(axios);

describe('getUsers', () => {
    it('should fetch users from the API', async () => {
    
    mock.onGet(`${baseUrl}/users`).reply(200, mockUsers);

    const userRepository = CreateUserRepository();
    const result = await userRepository.getAll();

    expect(result).toEqual(mockUsers);
  });

  it('should handle errors gracefully', async () => {
    mock.onGet(`${baseUrl}/users`).reply(404, { error: 'Not Found' });
  
    const userRepository = CreateUserRepository();

    await expect(userRepository.getAll()).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });

  it('should fetch users from the API filtered by userId', async () => {

    mock.onGet(`${baseUrl}/users?id=${mockUsers[0].id}`).reply(200, mockUsers);

    const userRepository = CreateUserRepository();
    const result = await userRepository.get(mockUsers[0].id);

    expect(result).toEqual(mockUsers);
  });

  it('should handle errors gracefully with param', async () => {
    mock.onGet(`${baseUrl}/users?id=${mockUsers[0].id}`).reply(404, { error: 'Not Found' });

    const userRepository = CreateUserRepository();
  
    await expect(userRepository.get(mockUsers[0].id)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({
          status: 404,
          data: { error: 'Not Found' },
        }),
      })
    );
  });
  

});
