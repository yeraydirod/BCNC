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

async function get(userId: number): Promise<Album[]> {
    try {
        //https://jsonplaceholder.typicode.com/albums?userId=1
        const response = await axios.get(`${baseUrl}/albums?userId=${userId}`);
        return response.data as Album[];
    } catch (error) {
        console.error('Error fetching Albums:', error);
        throw error;
    }
}
async function getAll(): Promise<Album[]> {
    try {
        const response = await axios.get(`${baseUrl}/albums`);
        return response.data as Album[];
    } catch (error) {
        console.error('Error fetching Albums:', error);
        throw error;
    }
}
