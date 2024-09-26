import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JWTPayload } from '../jwt/jwt.payload';
import { UserResponseDto } from 'src/users/dto/user-response.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // async validate(payload: any): Promise<UserResponseDto> {
  //   const user = await this.usersService.getUserById(payload.userId);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }

  async validate(payload: any) {
    return {userId: payload.sub, nickname: payload.nickname};
  } 
  
}