import { Photo } from '../domain/Photo'
import { PhotoRepository } from '../domain/PhotoRepository'

/**
 * list of albums of user
 * @param photoRepository 
 * @param albumId 
 * @returns Photo[]
 */
export async function getPhoto( photoRepository: PhotoRepository, albumId: number): Promise<Photo[]> {
    return photoRepository.get(albumId)
}