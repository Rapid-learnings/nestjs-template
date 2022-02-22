import { Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';

import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(findData);
  }

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

  async createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity> {
    const user = this.userRepository.create({ ...userRegisterDto });

    return this.userRepository.save(user);
  }
}
