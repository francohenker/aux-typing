import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
     
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users> 
    ) {}
    

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async create(user: Users): Promise<Users> {
        return await this.usersRepository.save(user);
    }


    
    


}
