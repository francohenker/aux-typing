import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/users.entity';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { Phrase } from './phrase/entities/phrase.entity';
import { PhraseModule } from './phrase/phrase.module';
import { PhraseService } from './phrase/phrase.service';
import { PhraseController } from './phrase/phrase.controller';
import { PhraseToUsers } from './phrase-to-user/entities/phrase-to-users.entity';
import { PhraseToUserModule } from './phrase-to-user/phrase-to-user.module';
import { PhraseToUserController } from './phrase-to-user/phrase-to-user.controller';
import { PhraseToUserService } from './phrase-to-user/phrase-to-user.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/db.sqlite',
      entities: [Users, Phrase, PhraseToUsers],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users, Phrase, PhraseToUsers]),
    UsersModule,
    PhraseModule,
    PhraseToUserModule,
    AuthModule,   
  ],
  controllers: [AppController, UsersController, PhraseController, PhraseToUserController],
  providers: [AppService, UsersService, PhraseService, PhraseToUserService, JwtService],
})
export class AppModule {}
