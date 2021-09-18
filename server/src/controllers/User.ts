import {
  Controller, BodyParams,
  Delete, Post, Put
} from "@tsed/common"
import { UserService } from '../services/UserService'
import { Status } from "@tsed/schema"
import { Users } from '../entity/Users'


@Controller('/')
export class User {


  constructor(private userService: UserService) {

  }


  @Post('/login')
  login(@BodyParams() data: Users): Promise<Users> {
    return this.userService.getUser(data)
  }

  @Post('/signup')
  @Status(201)
  signup(@BodyParams() data: Users): Promise<Users> {
    return this.userService.create(data)
  }

  @Put('/edit/:uuid')
  async edit() {

  }

  @Delete('/delete/:uuid')
  async delete() {

  }

}
