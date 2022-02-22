import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';
import { ThrottlerModule } from '@nestjs/throttler';

import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    SentryModule.forRootAsync({
      imports: [SharedModule],
      useFactory: async (configService: ConfigService) => ({
        debug: true,
        dsn: configService.get('SENTRY_DSN'),
        logLevel: LogLevel.Debug,
        environment: configService.nodeEnv,
        tracesSampleRate: 1.0,
      }),
      inject: [ConfigService],
    }),

    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ConfigService) => configService.typeOrmConfig,
      inject: [ConfigService],
    }),

    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
