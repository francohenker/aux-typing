import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
export declare class UsersService {
    private usersRepository;
    private PhraseToUsersRepository;
    constructor(usersRepository: Repository<Users>, PhraseToUsersRepository: Repository<PhraseToUsers>);
    findAll(): Promise<Users[]>;
    findOne(nickname: string): Promise<Users>;
    getUserByName(name: string): Promise<Users>;
    getUserById(id: number): Promise<UserResponseDto>;
    create(user: CreateUserDto): Promise<Users>;
    getMaxWpm(): Promise<any>;
    login(user: UserDto): Promise<UserResponseDto>;
    update(user: UserDto): Promise<Users>;
}
