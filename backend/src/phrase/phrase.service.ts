import {Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhraseService {
    constructor(
        @InjectRepository(Phrase)
        private phraseRepository: Repository<Phrase>
    ) {}

}
