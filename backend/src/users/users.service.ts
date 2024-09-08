import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {
    [x: string]: any;
     
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(PhraseToUsers)
        private PhraseToUsersRepository: Repository<PhraseToUsers>,
        private AuthService: AuthService,
        private jwtService: JwtService,
        
    ) {}
    

    async findAll(): Promise<Users[]> {
        return plainToInstance(Users, await this.usersRepository.find());
    }

    async findOne(nickname: string): Promise<Users> {
        return await this.usersRepository.findOneBy({
            nickname: nickname,
        });
    }

    //USE ONLY IN INTERNAL FUNCTIONS
    async getUserByName(name: string): Promise<Users> {
        return await this.usersRepository.findOneBy({
            nickname: name,
        });
    }

    // return UserResponseDto objet
    async getUserById(id: number): Promise<UserResponseDto> {
        const user = await this.usersRepository.findOneBy({id});
        if(!user){  
            throw new Error('User not found');
        }
        return new UserResponseDto(user.id, user.nickname);
    }

    async create(user: CreateUserDto): Promise<Users> { 
        
        const userSearch = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        
        if (userSearch) {
            throw new Error('User already exists');
        }
        
        try{
            const userNew = this.usersRepository.create(user);
            return await this.usersRepository.save(userNew);
        }catch(error){
            console.log(error);
        }     
        
    }

    //using in leaderboard
    async getMaxWpm(): Promise<any> {
        return await this.PhraseToUsersRepository
      .createQueryBuilder('utp')
      .select('u.nickname', 'nickname')  // Seleccionar solo el nickname
      .addSelect('MAX(utp.wpm)', 'max_wpm')  // Seleccionar el máximo WPM
      .innerJoin('utp.user', 'u')  // Unir con la tabla de usuarios
      .groupBy('u.nickname')  // Agrupar solo por nickname
      .getRawMany();
    }

    async login(user: UserDto): Promise<{ access_token: string }> {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if(!userNew){
            throw new Error('User not found');
        }

        if(bcrypt.compareSync(user.password, userNew.password)){
            return this.AuthService.generateAccessToken(user.nickname);
        }
        throw new Error('User or password incorrect');
    }

    // async comparePassword(nickname: string, password: string): Promise<boolean> {
    //     const pass = this.usersRepository.query('SELECT password FROM users WHERE nickname = ?', [nickname]);
    //     if (pass[0] === password) {
    //         return true;
    //     }
    //     return false;
    // }

    //modify later
    async update(user: UserDto, token: any): Promise<Users> {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if(!userNew){
            throw new Error('User not found');
        }

        if(bcrypt.compareSync(user.password, userNew.password)){
            return userNew;
        }
        
        const decoded = this.jwtService.decode(token);
        const salt = await bcrypt.genSalt();
        const pass = await bcrypt.hash(user.password, salt);

        // Verificar si el campo admin es verdadero
        if(decoded.name === user.nickname){
            this.usersRepository.update(userNew.id, {password: pass});
        }
        
        return await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });

    }
    
      extractTokenFromHeader(request): string {
        const authHeader = request.headers['authorization'];
        if (authHeader && authHeader.startsWith('Bearer ')) {
          return authHeader.split(' ')[1]; // Extraer solo el token
        }
        return null;
      }

}


