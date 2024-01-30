import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'

export async function getAlbums( albumRepository: AlbumRepository, userId: number): Promise<Album[]> {
    return albumRepository.get(userId)
}