import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
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


  // USE ONLY IN DEV ENVIRONMENT
  // @Post('/validate')
  // async prueba(@Body() user: LoginUserDto){
  //   return this.authService.validateUser(user.nickname, user.password);
  // }

}