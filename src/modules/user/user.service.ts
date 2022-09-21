import { Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';

import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

/**
 * This service contain contains methods and business logic related to user like findByUsrnameOrEmail,createUser,findOne etc.
 */
@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  /**
   * Method to find user if exist in user table else undefined
   * @param findData 
   * @returns {user | undefined }
   */
  findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(findData);
  }

  /**
   * Method to find user by it's `username` or `email` if exist on user table
   * else undefined
   * @param options 
   * @returns {user | undefined}
   */
  async findByUsernameOrEmail(
    options: Partial<{ username: string; email: string }>,
  ): Promise<UserEntity | undefined> {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    if (options.email) {
      queryBuilder.orWhere('user.email = :email', {
        email: options.email,
      });
    }
    if (options.username) {
      queryBuilder.orWhere('user.username = :username', {
        username: options.username,
      });
    }

    return queryBuilder.getOne();
  }

  /**
   * Save user details into user table if all requirements for user credential is met
   * else reflect an error 
   * @param userRegisterDto 
   * @returns {user | error}
   */
  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    const user = this.userRepository.create({ ...userRegisterDto });

    return this.userRepository.save(user);
  }
}
