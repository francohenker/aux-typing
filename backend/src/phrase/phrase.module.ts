import { Module } from '@nestjs/common';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])],
  providers: [PhraseService],
  controllers: [PhraseController],
  exports: [PhraseService],
})
export class PhraseModule {}
