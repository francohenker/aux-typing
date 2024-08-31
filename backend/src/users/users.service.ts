import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { PhraseToUsers } from '../phrase-to-user/entities/phrase-to-users.entity';
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

    async create(user: Users): Promise<Users> {
        return await this.usersRepository.save(user);
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
    
}
