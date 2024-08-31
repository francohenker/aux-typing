import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return await this.usersService.findAll();
    }

    //using in leadearboard
    @Get('max-wpm')
    async getMaxWpmPerUser(): Promise<any> {
        return await this.usersService.getMaxWpm();
    }


    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
        try{
            return await this.usersService.create(createUserDto);
        }catch(error){
            console.log(error);
        }
    }

    @Post('/login')
    async login(@Body() user: Users): Promise<Users> {
        return await this.usersService.login(user);
    }

}
