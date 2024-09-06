import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JWTPayload } from './jwt.payload';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.usersService.getUserByName(username);
    return await user.validatePassword(pass);
  }

  async generateAccessToken(name: string) {
    const user = await this.usersService.getUserByName(name);
    const payload: JWTPayload = { userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signIn(user: LoginUserDto): Promise<{ access_token: string }> {
    // const user = await this.usersService.findOne(username);
    const user1 = await this.usersRepository.findOneBy({
      nickname: user.nickname,
    });

    if(!user1){
      throw new UnauthorizedException();
    }


    if (user1?.password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user1.id, username: user1.nickname };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  

}