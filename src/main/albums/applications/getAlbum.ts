import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'

/**
 * list of albums of user
 * @param albumRepository 
 * @param userId 
 * @returns Album[]
 */
export async function getAlbums( albumRepository: AlbumRepository, userId: number): Promise<Album[]> {
    return albumRepository.get(userId)
}