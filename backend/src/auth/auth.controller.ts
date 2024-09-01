import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/login-update-user.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() loginDTO: UserDto): Promise<{ access_token: string }> {
    const { nickname, password } = loginDTO;
    const valid = await this.authService.validateUser(nickname, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateAccessToken(nickname);
  }
}