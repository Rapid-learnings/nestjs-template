import { NestFactory, Reflector } from '@nestjs/core';
import helmet from 'helmet';
import hpp from 'hpp';
import xss from 'xss-clean';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import { HttpExceptionFilter } from './shared/filters/bad-request.filter';
import { QueryFailedFilter } from './shared/filters/query-failed.filter';
import { getConnectionManager } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.use(hpp());
  app.use(xss());

  const reflector = app.get(Reflector);
  app.useGlobalFilters(
    new HttpExceptionFilter(reflector),
    new QueryFailedFilter(reflector),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      validationError: {
        target: false,
      },
    }),
  );

  if (configService.get('NODE_ENV') !== 'production') {
    setupSwagger(app);
  }

  const connectionManager = getConnectionManager();
  const connection = connectionManager.get('default');
  await connection.runMigrations();

  const port = configService.get('PORT');
  await app.listen(port);
  console.info(`server running on port ${port}`);
}
bootstrap();
