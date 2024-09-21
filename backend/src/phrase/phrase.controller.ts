import { Body, Controller, Delete, Get, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { Phrase } from './entities/phrase.entity';
import { UsersService } from 'src/users/users.service';

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
    async createPhrase(@Body() phrase: CreatePhraseDto, @Req() req: Request): Promise<Phrase> {
        const token = await UsersService.extractTokenFromHeader(req);
        return await this.PhraseService.createPhrase(phrase, token);
    }

    @Delete("/:id")
    async deletePhrase(@Body() id: number): Promise<void> {
        return await this.PhraseService.deletePhrase(id);
    }


}
