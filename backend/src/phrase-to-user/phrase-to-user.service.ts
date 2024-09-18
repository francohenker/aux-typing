import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhraseToUsers } from './entities/phrase-to-users.entity';
import { In, Repository } from 'typeorm';
import { PhraseToUserCreateDto, PhraseToUserDto } from './dto/phrase-to-user-create.dto';
import { UsersService } from 'src/users/users.service';
import { PhraseService } from 'src/phrase/phrase.service';
import { Phrase } from 'src/phrase/entities/phrase.entity';
import { Users } from 'src/users/entities/users.entity';


@Injectable()
export class PhraseToUserService {
    constructor(
        @InjectRepository(PhraseToUsers)
        private phraseToUsersRepository: Repository<PhraseToUsers>,
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(Phrase)
        private phraseRepository: Repository<Phrase>
    ) {}



    async createPhraseToUser(phraseToUser: PhraseToUserCreateDto): Promise<void> {
        const user = await this.usersRepository.findOneBy({
            id: phraseToUser.userId
        });
        
        if(!user){
            throw new Error('User not found');
        }
        
        const phrase = await this.phraseRepository.findOneBy({
            id: phraseToUser.phraseId
        });

        if(!phrase){
            throw new Error('Phrase not found');
        }

        // const a = new PhraseToUserDto(user, phrase, phraseToUser.wpm, phraseToUser.completed);         
        
        // const ptu = this.phraseToUsersRepository.create(phraseToUser);
        const ptu = this.phraseToUsersRepository.create({
            user: user,  // Asignar la relación de usuario
            phrase: phrase,  // Asignar la relación de phrase
            wpm: phraseToUser.wpm,
            completed: phraseToUser.completed
        });
        await this.phraseToUsersRepository.save(ptu);
        
    }
}
