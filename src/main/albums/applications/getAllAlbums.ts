import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'

export async function getAllAlbums( albumRepository: AlbumRepository): Promise<Album[]> {
    return albumRepository.getAll()
}