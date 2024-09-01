import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersService {
    private usersRepository;
    private PhraseToUsersRepository;
    constructor(usersRepository: Repository<Users>, PhraseToUsersRepository: Repository<PhraseToUsers>);
    findAll(): Promise<Users[]>;
    getUserByName(name: string): Promise<Users>;
    getUserById(id: number): Promise<Users>;
    create(user: CreateUserDto): Promise<Users>;
    getMaxWpm(): Promise<any>;
    login(user: LoginUserDto): Promise<Users>;
    comparePassword(nickname: string, password: string): Promise<boolean>;
}
