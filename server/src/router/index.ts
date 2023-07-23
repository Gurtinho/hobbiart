import { Router } from 'express'

const router = Router()

import { usersRouter } from './routes/users.routes'

router.use(usersRouter)

export { router }