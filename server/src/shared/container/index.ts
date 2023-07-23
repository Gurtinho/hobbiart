import { container } from 'tsyringe'
import '@src/prisma/prisma.symbols'

import { UsersRepository } from '@src/modules/users/repositories/prisma/implementations/UsersRepository'
import { IUsersRepository } from '@src/modules/users/repositories/prisma/IUsersRepository'

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)