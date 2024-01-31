import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

/**
 * selected user info
 * @param userRepository 
 * @param userId 
 * @returns User | null
 */
export async function getUser( userRepository: UserRepository, userId: number): Promise<User | null> {
    return userRepository.get(userId)
}