import { IsNotEmpty } from "class-validator";

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