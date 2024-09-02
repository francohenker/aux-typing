import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhraseToUserCreateDto } from './dto/phrase-to-user-create.dto';
import {PhraseToUserService} from './phrase-to-user.service'

@Controller('phrase-to-user')
export class PhraseToUserController {
    constructor(private PhraseToUserService: PhraseToUserService) {}

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    async createPhraseToUser(@Body() phrateToUser : PhraseToUserCreateDto): Promise<void> {
        await this.PhraseToUserService.createPhraseToUser(phrateToUser);
    }

    
}
