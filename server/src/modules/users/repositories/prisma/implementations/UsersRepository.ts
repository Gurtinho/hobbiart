import { PrismaClient } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { IUsersRepository } from '../IUsersRepository'

import { IUsersParamsDTO } from '@src/modules/users/dtos/IUsersParamsDTO'
import { IUserReturnDTO } from '@src/modules/users/dtos/IUsersReturnDTO'

@injectable()
class UsersRepository implements IUsersRepository {

  constructor(
    @inject('PrismaClient') 
    private prismaClient: PrismaClient
  ) { }

  async create({ name, email, password }: IUsersParamsDTO): Promise<IUserReturnDTO> {
    this.prismaClient.$connect()
    const user = await this.prismaClient.user.create({
      data: {
        name,
        email,
        password
      },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true
      }
    })
    this.prismaClient.$disconnect()
    return user
  }

  async list(): Promise<IUserReturnDTO[]> {
    this.prismaClient.$connect()
    const users = await this.prismaClient.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true
      }
    })
    this.prismaClient.$disconnect()
    return users
  }

  async findByEmail(email: string): Promise<IUserReturnDTO | null> {
    this.prismaClient.$connect()
    const user = await this.prismaClient.user.findFirst({
      where: {
        email: email
      },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true
      }
    })
    this.prismaClient.$disconnect()
    return user
  }

  async findByName(name: string): Promise<IUserReturnDTO | null> {
    this.prismaClient.$connect()
    const user = await this.prismaClient.user.findFirst({
      where: {
        name: name
      },
      select: {
        id: true,
        email: true,
        name: true,
        created_at: true
      }
    })
    this.prismaClient.$disconnect()
    return user
  }

  async updateName({ id, name, password }: IUsersParamsDTO): Promise<IUserReturnDTO> {
    this.prismaClient.$connect()
    const user = await this.prismaClient.user.update({
      where: {
        id: id,
        password: password
      },
      data: {
        name: name
      }
    })
    this.prismaClient.$disconnect()
    return user
  }
}

export { UsersRepository }
