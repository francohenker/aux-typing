import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return await this.usersService.findAll();
    }

    @Get('max-wpm')
    async getMaxWpmPerUser(): Promise<any> {
        return await this.usersService.getMaxWpm();
    }

    @Post()
    async create(@Body() user: Users): Promise<Users> {
        return await this.usersService.create(user);
    }


}
