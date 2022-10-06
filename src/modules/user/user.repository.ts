import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from './user.entity';

/**
 * UserRepository Inherits UserEntity 
 * @inherit UserEntity
 */
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
