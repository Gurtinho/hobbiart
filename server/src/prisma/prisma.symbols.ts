import { container } from 'tsyringe'
import { PrismaClient } from '@prisma/client'
import { prisma } from './index'

// registro do prisma no container
container.register<PrismaClient>('PrismaClient', {
  useValue: prisma,
})