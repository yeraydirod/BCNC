import { Photo } from './Photo'

export interface PhotoRepository {
    get: (albumId: number) => Promise<Photo | null>
    getAll: () => Promise<Photo[]>
}