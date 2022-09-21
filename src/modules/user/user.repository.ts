import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from './user.entity';

/**
 * UserRepository Inherits UserEntity 
 * @inherit UserEntity
 * @author Afzal Mansuri
 */
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
