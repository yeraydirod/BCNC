import { Album } from './Album'

export interface AlbumRepository {
    get: (userId: number) => Promise<Album | null>
    getAll: () => Promise<Album[]>
}