import { Album } from '../../models/albumInterface'
import axios from 'axios';
import { baseUrl } from '../definitions/baseUrl'

/**
 * Get all Albums or albums of userId param
 * @param userId id of user
 * @returns list of albums
 */
export async function getAlbums(userId?: number): Promise<Album[]> {
    try {
        const url = userId ? `${baseUrl}/albums/${userId}` : `${baseUrl}/albums`;
        const response = await axios.get(url);
        return response.data as Album[];
    } catch (error) {
        console.error('Error fetching Albums:', error);
        throw error;
    }
}
