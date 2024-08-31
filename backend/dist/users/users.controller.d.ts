import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Users[]>;
    create(user: Users): Promise<Users>;
}
