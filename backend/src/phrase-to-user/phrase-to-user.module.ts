import { Module } from '@nestjs/common';
import { PhraseToUserController } from './phrase-to-user.controller';
import { PhraseController } from '../phrase/phrase.controller';
import { PhraseToUserService } from './phrase-to-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseToUsers } from './entities/phrase-to-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseToUsers])],
  controllers: [PhraseToUserController],
  providers: [PhraseToUserService],
  exports: [PhraseToUserService],
})
export class PhraseToUserModule {}
