import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhraseToUsers } from './entities/phrase-to-users.entity';


@Injectable()
export class PhraseToUserService {
    constructor(
        @InjectRepository(PhraseToUsers)
        private phraseToUsersRepository: PhraseToUsers
    ) {}
}
