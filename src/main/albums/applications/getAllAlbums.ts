import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'

/**
 * list of all albums available
 * @param albumRepository 
 * @returns Album[]
 */
export async function getAllAlbums( albumRepository: AlbumRepository): Promise<Album[]> {
    return albumRepository.getAll()
}