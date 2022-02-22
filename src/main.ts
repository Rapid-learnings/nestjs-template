import { NestFactory, Reflector } from '@nestjs/core';
import helmet from 'helmet';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { HttpExceptionFilter } from './filters/bad-request.filter';
import { QueryFailedFilter } from './filters/query-failed.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet());
  app.setGlobalPrefix('/api');

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
      dismissDefaultMessages: true,
      validationError: {
        target: false,
      },
    }),
  );

  const configService = app.select(SharedModule).get(ConfigService);

  if (['development', 'staging'].includes(configService.nodeEnv)) {
    setupSwagger(app);
  }

  const port = configService.getNumber('PORT');
  await app.listen(port);

  console.info(`server running on port ${port}`);
}
bootstrap();
