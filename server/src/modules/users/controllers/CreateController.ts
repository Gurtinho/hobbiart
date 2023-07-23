import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateService } from '../services/CreateService'

class CreateController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body
            const createService = container.resolve(CreateService);
            const user = await createService.execute({ name, email, password });
            return res.status(200).json(user)
        } catch (err) {
            throw new Error('Error to create user')
        }
    }
}

export { CreateController }