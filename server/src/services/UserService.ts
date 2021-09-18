import { Injectable } from '@tsed/common'
import { Users } from '../entity/Users'
import { ClientRequest } from '../decorators/decorators'



@Injectable()
export class UserService {

    @ClientRequest()
    async create(users: Users): Promise<Users> {
        return users
    }

    @ClientRequest()
    async getUser(users: Users): Promise<Users> {
        return users
    }

}

