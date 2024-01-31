import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

/**
 * list of all users available
 * @param userRepository 
 * @returns User[]
 */
export async function getAllUsers( userRepository: UserRepository): Promise<User[]> {
    return userRepository.getAll()
}