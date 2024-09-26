import { Body, Controller, ExecutionContext, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import { AdminGuard, JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        
    ) {}

    //not used yet
    @Get()
    @UseGuards(AdminGuard)
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
    async login(@Body() user: UserDto): Promise<{ access_token: string }> {
        try{
            return await this.usersService.login(user);
        }catch(error){
            console.log(error);
        }
    }


    //CHECK
    @UseGuards(JwtAuthGuard)
    @Post("/update")
    @UsePipes(new ValidationPipe({transform: true}))
    async update(@Body() user: UserDto, @Req() request): Promise<Users> {
        try{
            const token = this.usersService.extractTokenFromHeader(request);
            return await this.usersService.update(user, token);
        }catch(error){
            console.log(error);
        }
    }




}
