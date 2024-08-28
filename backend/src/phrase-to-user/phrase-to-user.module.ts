import { Module } from '@nestjs/common';
import { PhraseToUserController } from './phrase-to-user.controller';
import { PhraseController } from '../phrase/phrase.controller';
import { PhraseToUserService } from './phrase-to-user.service';

@Module({
  controllers: [PhraseToUserController, PhraseController],
  providers: [PhraseToUserService]
})
export class PhraseToUserModule {}
