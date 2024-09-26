import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from './jwt/jwt.payload';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    // const user = await this.usersService.getUserByName(username);
    const user = await this.usersRepository.findOneBy({
      nickname: username,
    });
    return await user.validatePassword(pass);
  }

  async generateAccessToken(username: string) {
    // const user = await this.usersService.getUserByName(name);
    const user = await this.usersRepository.findOneBy({
      nickname: username,
    });    
    const payload = { name: user.nickname, userId: user.id, admin: user.admin };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  //DON'T WORK STILL
  // async signIn(user: LoginUserDto): Promise<{ access_token: string }> {
  //   // const user = await this.usersService.findOne(username);
  //   const user1 = await this.usersRepository.findOneBy({
  //     nickname: user.nickname,
  //   });

  //   if(!user1){
  //     throw new UnauthorizedException();
  //   }


  //   if(bcrypt.compareSync(user1.password, user.password)){
  //     throw new UnauthorizedException("no");
  //   }
    
  //   if (user1?.password !== user.password) {
    
  //   }

  //   const payload = { sub: user1.id, username: user1.nickname };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }
  

}