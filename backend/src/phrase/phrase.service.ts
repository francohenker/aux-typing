import {ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';
import { Repository } from 'typeorm';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entities/users.entity';
// import { JwtService } from '@nestjs/jwt';
import { JwtService2 } from '../auth/jwt.service';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class PhraseService {
    constructor(
        @InjectRepository(Phrase)
        private phraseRepository: Repository<Phrase>,
        private usersService: UsersService,
        private jwtService2: JwtService2,
        private jwtService: JwtService,
    ) {}

    async getAllPhrases(): Promise<Phrase[]> {
        return await this.phraseRepository.find();
    }
    
    async getPhraseById(id: number): Promise<Phrase> {
        return await this.phraseRepository.findOneBy({ id });
    }

    // CREATE A NEW PHRASE AND RETURN IT
    async createPhrase(createPhraseDto: CreatePhraseDto, token: string): Promise<Phrase> {
        // const { phrase, createdBy } = createPhraseDto;
        const tokenUser = await this.jwtService2.decodeToken(token);
        const decode = this.jwtService.decode(token);

        const user = await this.usersService.getUserByName(decode.name); 
        if(!user){
            throw new Error('User not found');
        }

        const existingPhrase = await this.phraseRepository.findOneBy({ phrase: createPhraseDto.phrase });
        if (existingPhrase) {
          throw new Error('Phrase already exists');
        }

        const phraseNew = this.phraseRepository.create({
            phrase: createPhraseDto.phrase,
            createdBy: user,
        });
        
        
        return await this.phraseRepository.save(phraseNew);
    }

    async deletePhrase(id: number): Promise<void> {
        const phrase = await this.phraseRepository.findOneBy({ id });
        if (!phrase) {
            throw new Error('Phrase not found');
        }
        await this.phraseRepository.delete(phrase);
    }
}
