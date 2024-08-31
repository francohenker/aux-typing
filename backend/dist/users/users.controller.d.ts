import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    getMaxWpmPerUser(): Promise<any>;
    create(user: Users): Promise<Users>;
}
