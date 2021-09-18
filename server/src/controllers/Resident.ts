import {
    Controller, BodyParams, QueryParams,
    Delete, Post, Put, Get
} from "@tsed/common"
import { ResidentService } from '../services/ResidentService'
import { Status } from "@tsed/schema"
import { Resident } from '../entity/Resident'


@Controller('/resident')
export class Residents {


    constructor(private residentService: ResidentService) {

    }


    @Get('/:uuid')
    get(@QueryParams() data: Resident): Promise<Resident> {
        return this.residentService.getResident(data)
    }

    @Post('/add')
    @Status(201)
    add(@BodyParams() data: Resident): Promise<Resident> {
        return this.residentService.createResident(data)
    }

    @Put('/edit/:uuid')
    edit() {

    }

    @Delete('/delete/:uuid')
    delete() {

    }

}
