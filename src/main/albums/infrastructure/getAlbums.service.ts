import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'
import axios from 'axios';
import { baseUrl } from '../../../definitions/baseUrl'

export function CreateAlbumRepository(): AlbumRepository {
    return {
        get,
        getAll
    }
}

/**
 * list of albums of user
 * @param userId 
 * @returns Album[]
 */
async function get(userId: number): Promise<Album[]> {
    try {
        //https://jsonplaceholder.typicode.com/albums?userId=1
        const response = await axios.get(`${baseUrl}/albums?userId=${userId}`);
        return response.data as Album[];
    } catch (error) {
        console.error('Error fetching Albums by userId:', error);
        throw error;
    }
}

/**
 * list of all albums available
 * @returns Album[]
 */
async function getAll(): Promise<Album[]> {
    try {
        //https://jsonplaceholder.typicode.com/albums
        const response = await axios.get(`${baseUrl}/albums`);
        return response.data as Album[];
    } catch (error) {
        console.error('Error fetching Albums:', error);
        throw error;
    }
}
