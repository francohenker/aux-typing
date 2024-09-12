import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthProviders } from '../../enums/authProviders';
// import { AuthProviders } from '@nestjs/core/enums/auth-providers.enum';

import { GoogleAuthService } from './google.auth.service';

@Controller({
  path: 'auth/google',
})
export class GoogleAuthController {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly configService: ConfigService,
  ) {}

  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const frontendBaseRedirectURL = this.configService.get<string>(
      'FRONTEND_AUTH_REDIRECT_URL',
    );
    if (!req.user) return res.redirect(301, frontendBaseRedirectURL);

    let frontendUrl = frontendBaseRedirectURL;

    try {
      const { token, googleRefreshToken } = await this.googleAuthService.login(
        req.user,
      );
      frontendUrl += `?provider=${AuthProviders.GOOGLE}&authToken=${token}&googleRefreshToken=${googleRefreshToken}`;
    } catch (error) {
      frontendUrl += `?provider=${AuthProviders.GOOGLE}&error=${error.message}`;
    }

    return res.redirect(301, frontendUrl);
  }

  @Get('refresh')
  async googleRefresh(@Req() req: Request) {
    const authorization = req.headers.authorization;

    const newToken = await this.googleAuthService.refreshGoogleToken(
      authorization,
    );

    return {
      message: 'Refreshed Google token',
      headers: {
        Authorization: newToken,
      },
    };
  }

  @Get('check')
  async googleCheck(@Req() req: Request) {
    const authorization = req.headers.authorization;

    const email = await this.googleAuthService.checkGoogleToken(authorization);

    return {
      message: 'Valid Google token',
      email,
    };
  }
}