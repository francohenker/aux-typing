import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { Phrase } from './typing-phrase/entities/phrase.entity';
import { PhraseToUsers } from './typing-phrase/entities/phrase-to-users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/db.sqlite',
      entities: [Users, Phrase, PhraseToUsers],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
