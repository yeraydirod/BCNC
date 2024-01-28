import { Photo } from '../domain/Photo'
import { PhotoRepository } from '../domain/PhotoRepository'
import axios from 'axios';
import { baseUrl } from '../../../definitions/baseUrl'

export function CreatePhotoRepository(): PhotoRepository {
    return {
        get,
        getAll
    }
}


async function get(albumId: number): Promise<Photo | null> {
    try {
        //https://jsonplaceholder.typicode.com/photos?albumId=1
        const response = await axios.get(`${baseUrl}/photos?albumId=${albumId}`);
        return response.data as Photo;
    } catch (error) {
        console.error('Error fetching Photos:', error);
        throw error;
    }
}

async function getAll(): Promise<Photo[]> {
    try {
        const response = await axios.get(`${baseUrl}/photos`);
        return response.data as Photo[];
    } catch (error) {
        console.error('Error fetching Photos:', error);
        throw error;
    }
}
