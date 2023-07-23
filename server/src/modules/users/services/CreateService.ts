import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../repositories/prisma/IUsersRepository'

interface IUserData {
  name: string
  email: string
  password: string
}

interface IUserReturn {
  id: string
  name: string
  email: string
}

@injectable()
class CreateService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  async execute({ name, email, password }: IUserData): Promise<IUserReturn> {
    try {
      const userAlreadyExists = await this.usersRepository.findByEmail(email)
      if (userAlreadyExists) {
        throw new Error('User already exists')
      }
      const passwordHash = await hash(password, 8)
      const user = await this.usersRepository.create({
        name,
        email,
        password: passwordHash,
      })
      return user
    } catch (err) {
      throw new Error('Create user error')
    }
  }
}

export { CreateService }
