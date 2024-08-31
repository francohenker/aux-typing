import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    getMaxWpmPerUser(): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<Users>;
    login(user: Users): Promise<Users>;
}
