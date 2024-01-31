import { Photo } from './Photo'

export interface PhotoRepository {
    get: (albumId: number) => Promise<Photo[]>
    getAll: () => Promise<Photo[]>
}