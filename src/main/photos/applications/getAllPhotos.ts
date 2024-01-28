import { Photo } from '../domain/Photo'
import { PhotoRepository } from '../domain/PhotoRepository'

export async function getAllPhotos( photoRepository: PhotoRepository): Promise<Photo[]> {
    return photoRepository.getAll()
}