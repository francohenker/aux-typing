// src/auth/interfaces/auth.interfaces.ts

export interface IGoogleUser {
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
  }

  export interface IJwtPayload {
    id: string; // ID del usuario en la base de datos
    googleAccessToken: string; // Token de acceso de Google
    googleRefreshToken: string; // Token de refresco de Google
  }
  