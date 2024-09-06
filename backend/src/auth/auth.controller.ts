import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/login-update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Post('/login')
  @UsePipes(new ValidationPipe({transform: true}))
  signIn(@Body() user: LoginUserDto) {
    return this.authService.signIn(user);
  }
  
  // @Post()
  // async login(@Body() loginDTO: UserDto): Promise<{ access_token: string }> {
  //   const { nickname, password } = loginDTO;
  //   const valid = await this.authService.validateUser(nickname, password);
  //   if (!valid) {
  //     throw new UnauthorizedException();
  //   }
  //   return await this.authService.generateAccessToken(nickname);
  // }
}