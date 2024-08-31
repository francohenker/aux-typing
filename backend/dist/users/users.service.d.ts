import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    private PhraseToUsersRepository;
    constructor(usersRepository: Repository<Users>, PhraseToUsersRepository: Repository<PhraseToUsers>);
    findAll(): Promise<Users[]>;
    create(CreateUserDto: CreateUserDto): Promise<Users>;
    getMaxWpm(): Promise<any>;
    login(user: Users): Promise<Users>;
}
