import { Module } from '@nestjs/common';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';
import { Users } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phrase, Users]),
    UsersModule,
  ],
  providers: [PhraseService],
  controllers: [PhraseController],
  exports: [PhraseService],
})
export class PhraseModule {}
