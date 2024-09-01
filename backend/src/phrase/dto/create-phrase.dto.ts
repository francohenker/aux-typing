import { IsNotEmpty, MinLength } from "class-validator";

export class CreatePhraseDto {  
    @IsNotEmpty()
    @MinLength(30,{
        message: 'El texto debe tener al menos 30 caracteres'
    })
    phrase: string;

    @IsNotEmpty()
    createdBy: number;
    
    constructor(phrase: string, createdBy: number) {
        this.phrase = phrase;
        this.createdBy = createdBy;
    }
}