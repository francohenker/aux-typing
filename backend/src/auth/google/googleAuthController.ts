import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthProviders } from '../../enums/authProviders';
import { GoogleAuthService } from './google.auth.service';
import { UsersService } from 'src/users/users.service';
import { UserDto } from 'src/users/dto/login-update-user.dto';
import { AuthService } from '../auth.service';

@Controller({
  path: 'auth/google',
})
export class GoogleAuthController {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Inicia el flujo de autenticación con Google
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const frontendBaseRedirectURL = this.configService.get<string>(
      'FRONTEND_AUTH_REDIRECT_URL',
    );

    if (!req.user) {
      // Si no hay usuario, redirigir a la página principal o a una página de error
      return res.redirect(301, frontendBaseRedirectURL);
    }

    let frontendUrl = frontendBaseRedirectURL;

    try {
      const { token, googleRefreshToken } = await this.googleAuthService.login(req.user);
      frontendUrl += `?provider=${AuthProviders.GOOGLE}&authToken=${token}&googleRefreshToken=${googleRefreshToken}`;
    } catch (error) {
      frontendUrl += `?provider=${AuthProviders.GOOGLE}&error=${error.message}`;
    }

    return res.redirect(301, frontendUrl);
  }

  @Get('refresh')
  async googleRefresh(@Req() req: Request) {
    const authorization = req.headers.authorization;

    const newToken = await this.googleAuthService.refreshGoogleToken(authorization);
    
    //COMING SOON
    // const newToken2 = await this.userService.loginWithThirdParty(new UserDto(req.user, "GOOGLE_ENTRY"));
    // const newToken2 = await this.authService.generateAccessToken(req.user.displayName);

    return {
      message: 'Refreshed token',
      headers: {
        Authorization: newToken,
      },
    };
  }

  @Get('check')
  async googleCheck(@Req() req: Request) {
    const authorization = req.headers.authorization;

    //VER POR FAVOR AJSDJAJS
    const email = await this.googleAuthService.checkGoogleToken(authorization);
    
    //COMING SOON
    // const email2 = await this.authService.validateUser(req.user.);
    return {
      message: 'Valid token',
      email,
    };
  }
}
