import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import ormconfig from './ormconfig';
import { envSchema } from './shared/schema/env.schema';


/**
 * It is the root module for the application in we import all feature modules and configure modules and packages that are common in feature modules. Here we also configure the middlewares.
 *
 * Here, feature modules imported are - DatabaseModule, AuthModule, UserModule, ormconfig.
 * other modules are :
 *      ConfigModule - enables us to access environment variables application wide.
 *      TypeOrmModule - enables us to rate limit the number of incoming requests.
 *      
 * @author Afzal Mansuri
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: envSchema,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})

/**
 * @module AppModule
 * Contains all required imports,controllers, providers and services.
 * @author Afzal Mansuri
 */
export class AppModule {}
