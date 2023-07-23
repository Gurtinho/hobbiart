import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../repositories/prisma/IUsersRepository'

@injectable()
class ListService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }
    async execute() {
        try {
            const users = await this.usersRepository.list()
            return users
        } catch (err) {
            throw new Error('Cant list users')
        }
    }
}

export { ListService }