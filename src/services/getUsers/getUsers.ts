import { User } from '../../models/userInterface'
import axios from 'axios'
import { baseUrl } from '../definitions/baseUrl'

export async function getUsers(): Promise<User[]> {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        return response.data as User[];
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
