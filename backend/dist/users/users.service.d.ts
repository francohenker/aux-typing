import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private usersRepository;
    private PhraseToUsersRepository;
    private AuthService;
    private jwtService;
    [x: string]: any;
    constructor(usersRepository: Repository<Users>, PhraseToUsersRepository: Repository<PhraseToUsers>, AuthService: AuthService, jwtService: JwtService);
    findAll(): Promise<Users[]>;
    findOne(nickname: string): Promise<Users>;
    getUserByName(name: string): Promise<Users>;
    getUserById(id: number): Promise<UserResponseDto>;
    create(user: CreateUserDto): Promise<Users>;
    getMaxWpm(): Promise<any>;
    login(user: UserDto): Promise<{
        access_token: string;
    }>;
    update(user: UserDto, token: any): Promise<Users>;
    extractTokenFromHeader(request: any): string;
}
