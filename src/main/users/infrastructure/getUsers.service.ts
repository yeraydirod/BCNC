import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import axios from 'axios'
import { baseUrl } from '../../../definitions/baseUrl'

export function CreateUserRepository(): UserRepository {
    return {
        get,
        getAll
    }
}

/**
 * select user info
 * @param userId 
 * @returns User | null
 */
async function get(userId: number): Promise<User | null> {
    try {
        //https://jsonplaceholder.typicode.com/users?id=1
        const response = await axios.get(`${baseUrl}/users?id=${userId}`);
        return response.data as User;
    } catch (error) {
        console.error('Error fetching Users:', error);
        throw error;
    }
}

/**
 * list of all users available
 * @returns 
 */
async function getAll(): Promise<User[]> {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        return response.data as User[];
    } catch (error) {
        console.error('Error fetching Users:', error);
        throw error;
    }
}