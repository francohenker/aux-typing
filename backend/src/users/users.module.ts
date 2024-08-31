import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { PhraseToUsers } from 'src/phrase-to-user/entities/phrase-to-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, PhraseToUsers])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}