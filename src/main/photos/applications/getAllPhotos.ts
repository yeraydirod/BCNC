import { Photo } from '../domain/Photo'
import { PhotoRepository } from '../domain/PhotoRepository'

/**
 * list of all photos available
 * @param photoRepository 
 * @returns Photo[]
 */
export async function getAllPhotos( photoRepository: PhotoRepository): Promise<Photo[]> {
    return photoRepository.getAll()
}