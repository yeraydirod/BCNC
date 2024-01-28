import { Photo } from '../../models/photoInterface'
import axios from 'axios';
import { baseUrl } from '../definitions/baseUrl'

/**
 * Get all photos or photos by albumId
 * @param albumId id of album
 * @returns list of photos
 */
export async function getPhotos(albumId?: number): Promise<Photo[]> {
    try {
        const url = albumId ? `${baseUrl}/photos/${albumId}` : `${baseUrl}/photos`
        const response = await axios.get(url);
        return response.data as Photo[];
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}
  