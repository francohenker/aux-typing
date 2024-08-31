import { Body, HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

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
          .select('utp.user', 'user_id')
          .addSelect('MAX(utp.wpm)', 'max_wpm')
          .innerJoin('utp.user', 'u')
          .addSelect('u.nickname', 'nickname')
          .groupBy('utp.user')
          .addGroupBy('u.nickname')
          .getRawMany();
    }

    async login(user: LoginUserDto): Promise<Users> {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if(!userNew){
            throw new Error('User not found');
            
        }
        // return await this.usersRepository.save(user);
        return userNew;
    }
    
}
