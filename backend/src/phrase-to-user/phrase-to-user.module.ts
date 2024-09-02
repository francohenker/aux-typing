import { Module } from '@nestjs/common';
import { PhraseToUserController } from './phrase-to-user.controller';
import { PhraseController } from '../phrase/phrase.controller';
import { PhraseToUserService } from './phrase-to-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseToUsers } from './entities/phrase-to-users.entity';
import { Phrase } from 'src/phrase/entities/phrase.entity';
import { Users } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseToUsers, Users, Phrase])],
  controllers: [PhraseToUserController],
  providers: [PhraseToUserService],
  exports: [PhraseToUserService],
})
export class PhraseToUserModule {}
