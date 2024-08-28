import { Users } from 'src/users/entities/users.entity';
import { Phrase } from './phrase.entity';
export declare class PhraseToUsers {
    id: number;
    completed: boolean;
    user: Users;
    phrase: Phrase;
    wpm: number;
}
