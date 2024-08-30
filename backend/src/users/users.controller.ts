import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return await this.usersService.findAll();
    }


}
