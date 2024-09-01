import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { Phrase } from './entities/phrase.entity';

@Controller('phrase')
export class PhraseController {

    constructor(private PhraseService: PhraseService) {}


    @Post("/create")
    @UsePipes(new ValidationPipe({transform: true}))
    async createPhrase(@Body() phrase: CreatePhraseDto): Promise<Phrase> {
        return await this.PhraseService.createPhrase(phrase);
    }


}
