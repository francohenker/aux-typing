import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
    create(user: Users): Promise<Users>;
}
