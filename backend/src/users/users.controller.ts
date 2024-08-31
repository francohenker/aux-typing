import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

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
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() user: CreateUserDto): Promise<Users> {
        try{
            return await this.usersService.create(user);
        }catch(error){
            console.log(error);
        }
    }

    @Post('/login')
    @UsePipes(new ValidationPipe({transform: true}))
    async login(@Body() user: LoginUserDto): Promise<Users> {
        try{
            return await this.usersService.login(user);
        }catch(error){
            console.log(error);
        }
    }




}
