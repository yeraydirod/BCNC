import { Album } from '../domain/Album'
import { AlbumRepository } from '../domain/AlbumRepository'

export async function getAlbum( albumRepository: AlbumRepository, userId: number): Promise<Album | null> {
    return albumRepository.get(userId)
}