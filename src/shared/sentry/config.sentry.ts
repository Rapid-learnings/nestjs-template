import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

export function sentry(app: INestApplication) {
  const configService = app.get(ConfigService);
  Sentry.init({
    dsn: configService.get('SENTRY_DSN'),
    release: `${configService.get('npm_package_name')}@${configService.get(
      'npm_package_version',
    )}`,
    environment: configService.get('NODE_ENV'),
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express(),
    ],
    tracesSampleRate: 1.0,
  });
}

export const sentryErrorHandler = Sentry.Handlers.errorHandler;
