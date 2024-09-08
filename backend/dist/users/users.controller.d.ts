import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    getMaxWpmPerUser(): Promise<any>;
    create(user: CreateUserDto): Promise<Users>;
    login(user: UserDto): Promise<{
        access_token: string;
    }>;
    update(user: UserDto, request: any): Promise<Users>;
}
