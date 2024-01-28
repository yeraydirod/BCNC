import { User } from './User'

export interface UserRepository {
    get: (userId: number) => Promise<User | null>
    getAll: () => Promise<User[]>
}