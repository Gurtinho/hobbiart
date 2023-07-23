import { inject, injectable } from 'tsyringe'
import { IUsersParamsDTO } from '../dtos/IUsersParamsDTO'
import { IUsersRepository } from '../repositories/prisma/IUsersRepository'

@injectable()
class UpdateService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}
    async execute({ id, name }: IUsersParamsDTO) {
        const passwordHash = 
        const user = await this.usersRepository.updateName({
            id, name, password
        })
    }
}

export { UpdateService }