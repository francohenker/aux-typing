import { Injectable, UnauthorizedException } from '@nestjs/common';
import { IGoogleUser, IJwtPayload } from '../auth.interfaces';
import { UsersService } from 'src/users/users.service';
import { AuthProviders } from '../../enums/authProviders';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: IGoogleUser) {
    const { email, firstName, accessToken, refreshToken } =
      user;

    let userEntity = await this.usersService.find({
      where: { email },
    });

    if (userEntity && userEntity?.provider !== AuthProviders.GOOGLE) {
      throw new Error('Email already exists');
    }

    if (!userEntity) {
      const newUser = {
        nickname: firstName,
        password: "GOOGLE_ENTRY",
        admin: false,
        // last_name: lastName,
        // provider: AuthProviders.GOOGLE,
      };
      userEntity = await this.usersService.create(newUser);
    }

    const payload: IJwtPayload = {
      id: userEntity.id,
      googleAccessToken: accessToken,
      googleRefreshToken: refreshToken,
    };

    const token = await this.generateToken(payload);

    return {
      message: 'User information from Google',
      user,
      token,
      googleRefreshToken: refreshToken,
    };
  }

  async checkGoogleToken(token: string) {
    const oAuth2Client = new google.auth.OAuth2(
      this.configService.getOrThrow('GOOGLE_CLIENT_ID'),
      this.configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
    );

    try {
      const result = await oAuth2Client.getTokenInfo(token);
      const invalidToken = new Date().getTime() > result.expiry_date;

      if (invalidToken) {
        throw new UnauthorizedException({
          message: 'Invalid Google token',
        });
      }

      return result.email;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Invalid Google token',
      });
    }
  }

  async refreshGoogleToken(refreshToken: string) {
    const oAuth2Client = new google.auth.OAuth2(
      this.configService.getOrThrow('GOOGLE_CLIENT_ID'),
      this.configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
    );

    try {
      oAuth2Client.setCredentials({
        refresh_token: refreshToken,
      });

      const {
        credentials: { access_token, refresh_token },
      } = await oAuth2Client.refreshAccessToken();

      const { email } = await oAuth2Client.getTokenInfo(access_token);

      const userEntity = await this.usersService.find({
        where: { email },
      });

      const payload: IJwtPayload = {
        id: userEntity.id,
        googleAccessToken: access_token,
        googleRefreshToken: refresh_token,
      };

      const token = await this.generateToken(payload);

      return token;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Invalid Google Refresh Token',
      });
    }
  }

  private async generateToken(payload: IJwtPayload, options?: JwtSignOptions) {
    const token = await this.jwtService.signAsync(
      {
        ...payload,
      },
      options,
    );
    return token;
  }
}