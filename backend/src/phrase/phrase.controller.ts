import { Body, Controller, Delete, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { Phrase } from './entities/phrase.entity';

@Controller('phrase')
export class PhraseController {

    constructor(private PhraseService: PhraseService) {}

    @Get()
    @UsePipes(new ValidationPipe({transform: true}))
    async getAllPhrases(): Promise<Phrase[]> {
        return await this.PhraseService.getAllPhrases();
    }

    @Get("/:id")
    async getPhraseById(@Body() id: number): Promise<Phrase> {
        return await this.PhraseService.getPhraseById(id);
    }

    @Post("/create")
    @UsePipes(new ValidationPipe({transform: true}))
    async createPhrase(@Body() phrase: CreatePhraseDto): Promise<Phrase> {
        return await this.PhraseService.createPhrase(phrase);
    }

    @Delete("/:id")
    async deletePhrase(@Body() id: number): Promise<void> {
        return await this.PhraseService.deletePhrase(id);
    }


}
