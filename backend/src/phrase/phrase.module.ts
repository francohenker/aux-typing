import { Module } from '@nestjs/common';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phrase } from './entities/phrase.entity';
import { Users } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';
import { JwtService } from '@nestjs/jwt';
import { JwtService2 } from '../auth/jwt.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Phrase, Users]),
    UsersModule,
  ],
  providers: [PhraseService, JwtService2, ConfigService, JwtService],
  controllers: [PhraseController],
  exports: [PhraseService],
})
export class PhraseModule {}
