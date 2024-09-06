import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    //not used yet
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Users[]> {
        return await this.usersService.findAll();
    }

    //using in leadearboard
    @Get('max-wpm')
    async getMaxWpmPerUser(): Promise<any> {
        return await this.usersService.getMaxWpm();
    }

    //create user
    @Post('/create')
    @UsePipes(new ValidationPipe({transform: true}))
    async create(@Body() user: CreateUserDto): Promise<Users> {
        try{
            return await this.usersService.create(user);
        }catch(error){
            console.log(error);
        }
    }

    //login user
    @Post('/login')
    @UsePipes(new ValidationPipe({transform: true}))
    async login(@Body() user: UserDto): Promise<UserResponseDto> {
        try{
            return await this.usersService.login(user);
        }catch(error){
            console.log(error);
        }
    }


    //CHECK
    @Post("/update")
    @UsePipes(new ValidationPipe({transform: true}))
    async update(@Body() user: UserDto): Promise<Users> {
        try{
            return await this.usersService.update(user);
        }catch(error){
            console.log(error);
        }
    }




}
