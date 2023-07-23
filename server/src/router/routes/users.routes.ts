import { Router } from 'express'
export const usersRouter = Router()

import { CreateController } from '@src/modules/users/controllers/CreateController';
import { ListController } from '@src/modules/users/controllers/ListController';

const createController = new CreateController()
const listController = new ListController()

// create user
usersRouter.post('/users', createController.handle)
// list users
usersRouter.get('/users', listController.handle)
// update user
// ...