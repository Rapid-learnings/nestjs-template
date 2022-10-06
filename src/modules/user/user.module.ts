import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

/**
 * It is a feature module where we keep the controller, service and other code related to user entity and  we import other modules and configure modules and packages that are being used in this module.
 *
 * Here, feature modules imported are - UseRepository.
 * other modules are :
 *      TypeOrmModule - it is an ORM and enables easy access to database.
 */

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService],
})

/**
 * @module UserModule 
 * @author Afzal Mansuri
 */
export class UserModule {}
