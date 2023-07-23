import { IUsersParamsDTO } from '../../dtos/IUsersParamsDTO'
import { IUserReturnDTO } from '../../dtos/IUsersReturnDTO'

interface IUsersRepository {

    create({ name, email, password }: IUsersParamsDTO): Promise<IUserReturnDTO>

    list(): Promise<IUserReturnDTO[]>

    findByEmail(email: string): Promise<IUserReturnDTO | null>

    findByName(name: string): Promise<IUserReturnDTO | null>

    updateName({ id, name, password }: IUsersParamsDTO): Promise<IUserReturnDTO>
    
}

export { IUsersRepository }