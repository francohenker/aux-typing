import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService2 {

  constructor(
    private configService: ConfigService,

) {}


async decodeToken(token: string): Promise<any> {
    try {
      const secret = this.configService.get<string>('JWT_SECRET');  // El secreto JWT que usas para firmar los tokens
      const decoded = jwt.verify(token, secret);  // Verifica y decodifica el token usando la clave secreta
      return decoded;  // Decodificado, contiene los datos del usuario
    } catch (err) {
        throw new Error('Invalid token');
    }
    
}
}