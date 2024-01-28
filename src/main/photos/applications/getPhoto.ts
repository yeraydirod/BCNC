import { Photo } from '../domain/Photo'
import { PhotoRepository } from '../domain/PhotoRepository'

export async function getPhoto( photoRepository: PhotoRepository, albumId: number): Promise<Photo | null> {
    return photoRepository.get(albumId)
}