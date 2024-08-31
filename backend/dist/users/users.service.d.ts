import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
export declare class UsersService {
    private usersRepository;
    private PhraseToUsersRepository;
    constructor(usersRepository: Repository<Users>, PhraseToUsersRepository: Repository<PhraseToUsers>);
    findAll(): Promise<Users[]>;
    create(user: Users): Promise<Users>;
    getMaxWpm(): Promise<any>;
}
