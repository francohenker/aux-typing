import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/users.entity';
import { Phrase } from './phrase/entities/phrase.entity';
import { PhraseToUsers } from './phrase-to-user/entities/phrase-to-users.entity';
import { PhraseModule } from './phrase/phrase.module';
import { PhraseToUserModule } from './phrase-to-user/phrase-to-user.module';
import { PhraseController } from './phrase/phrase.controller';
import { UsersController } from './users/users.controller';
import { PhraseToUserController } from './phrase-to-user/phrase-to-user.controller';
import { UsersService } from './users/users.service';
import { PhraseService } from './phrase/phrase.service';
import { PhraseToUserService } from './phrase-to-user/phrase-to-user.service';

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
    PhraseModule,
    PhraseToUserModule,
  ],
  controllers: [AppController, UsersController, PhraseController, PhraseToUserController],
  providers: [AppService, UsersService, PhraseService, PhraseToUserService],
})
export class AppModule {}
