import { NestFactory, Reflector } from '@nestjs/core';
import helmet from 'helmet';
import hpp from 'hpp';
import xss from 'xss-clean';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import { ConfigService } from './shared/config/config.service';
import { ConfigModule } from './shared/config/config.module';
import { HttpExceptionFilter } from './shared/filters/bad-request.filter';
import { QueryFailedFilter } from './shared/filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(ConfigModule).get(ConfigService);

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

  if (['development', 'staging'].includes(configService.nodeEnv)) {
    setupSwagger(app);
  }

  const port = configService.getNumber('PORT');
  await app.listen(port);
  console.info(`server running on port ${port}`);
}
bootstrap();
