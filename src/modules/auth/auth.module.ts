import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';


/**
 * It is a feature module where we keep the controller, service and other code related to authentication and   we import other modules and configure modules and packages that are being used in this module.
 *
 * Here, feature modules imported are - UserModule.
 * other modules are :
 *      TypeOrmModule - it is an ORM and enables easy access to database.
 *      JwtModule - it is an Jason web token and enable token caretionfo authentication
 *      PassportModule - it enables us to setup multiple types of authentication.
 * 
 * @author Afzal Mansuri
 * 
 */
@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET_KEY'),
        // if you want to use token with expiration date
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRATION_TIME'),
        },
      }),
    }),
  ],
  providers: [AuthService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
