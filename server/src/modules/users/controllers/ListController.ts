import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListService } from '../services/ListService'

class ListController {
    async handle(req: Request, res: Response): Promise<Response> {
        const usersService = container.resolve(ListService)
        const users = await usersService.execute()
        return res.status(200).json(users)
    }
}

export { ListController }