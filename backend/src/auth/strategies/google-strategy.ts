// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { IGoogleUser } from '../auth.interfaces';

// @Injectable()
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
//   constructor(configService: ConfigService) {
//     super({
//       clientID: configService.getOrThrow('GOOGLE_CLIENT_ID'),
//       clientSecret: configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
//       callbackURL: configService.getOrThrow('GOOGLE_CALLBACK_URL'),
//       scope: configService.getOrThrow<string>('GOOGLE_SCOPES').split(','),
//     });
//   }

//   authorizationParams(options: any): object {
//     return {
//       ...options,
//       access_type: 'offline',
//       prompt: 'consent',
//     };
//   }

//   async validate(
//     accessToken: string,
//     refreshToken: string,
//     profile: any,
//     done: VerifyCallback,
//   ): Promise<any> {
//     const { name, emails } = profile;
//     const user: IGoogleUser = {
//       email: emails[0].value,
//       firstName: name.givenName,
//       lastName: name.familyName,
//       accessToken,
//       refreshToken,
//     };
//     done(null, user);
//   }
// }

import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IGoogleUser } from '../auth.interfaces';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.getOrThrow('GOOGLE_CLIENT_ID'),
      clientSecret: configService.getOrThrow('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.getOrThrow('GOOGLE_CALLBACK_URL'),
      scope: configService.getOrThrow<string>('GOOGLE_SCOPES').split(','),
    });
  }

  authorizationParams(options: any): object {
    return {
      ...options,
      access_type: 'offline',
      prompt: 'consent',
    };
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails } = profile;
    const user: IGoogleUser = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      accessToken,
      refreshToken,
    };
    
    // Llama a done con null y el usuario
    done(null, user);
  }
}
