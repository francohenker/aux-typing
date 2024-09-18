import { IsNotEmpty } from "class-validator";
import { Phrase } from "src/phrase/entities/phrase.entity";
import { Users } from "src/users/entities/users.entity";

export class PhraseToUserCreateDto {    
    @IsNotEmpty()
    phraseId: number;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    wpm: number;    

    @IsNotEmpty()
    completed: boolean
    
    constructor(phraseId: number, userId: number, wpm: number, completed: boolean) {
        this.phraseId = phraseId;
        this.userId = userId;
        this.wpm = wpm;
        this.completed = completed;
    }
}


export class PhraseToUserDto {
    @IsNotEmpty()
    userId: Users;

    @IsNotEmpty()
    phraseId: Phrase;

    @IsNotEmpty()
    wpm: number;    

    @IsNotEmpty()
    completed: boolean
    
    constructor(userId: Users, phraseId: Phrase, wpm: number, completed: boolean) {
        this.userId = userId;
        this.phraseId = phraseId;
        this.wpm = wpm;
        this.completed = completed;
    }
}