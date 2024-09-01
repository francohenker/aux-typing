import { Body, HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/login-update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
     
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(PhraseToUsers)
        private PhraseToUsersRepository: Repository<PhraseToUsers>,
    ) {}
    

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async getUserByName(name: string): Promise<Users> {
        return await this.usersRepository.findOneBy({
            nickname: name,
        });
    }

    async getUserById(id: number): Promise<Users> {
        return await this.usersRepository.findOneBy({
            id: id,
        });
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

    async login(user: UserDto): Promise<Users> {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if(!userNew){
            throw new Error('User not found');
        }

        if(user.password === userNew.password){
            return userNew;
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
    async update(user: UserDto): Promise<Users> {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if(!userNew){
            throw new Error('User not found');
        }

        if(user.password === userNew.password){
            return userNew;
        }
        throw new Error('User or password incorrect');
    }
}
