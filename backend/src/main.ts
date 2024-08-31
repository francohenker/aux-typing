import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Elimina los campos no definidos en el DTO
    forbidNonWhitelisted: true, // Lanza un error si hay campos no permitidos
    transform: true,        // Transforma los tipos de datos a los especificados en el DTO
  }));

}
bootstrap();
