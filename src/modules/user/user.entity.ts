import { Entity, Column } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { UserDto } from './dto/UserDto';
import { PasswordTransformer } from './password.transformer';

/**
 * It describes users table in the database
 * @author Afzal Mansuri
 */
@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
  /**
   * firstName of a user
   */
  @Column({ nullable: true })
  firstName: string;

  /**
   * lastname of a user
   */
  @Column({ nullable: true })
  lastName: string;

  /**
   * role of a user
   */
  @Column({ type: 'int', default: RoleType.USER })
  role: RoleType;

  /**
   * email of a user
   */
  @Column({ unique: true, nullable: true })
  email: string;

  /**
   * password of a user
   */
  @Column({ nullable: true, transformer: new PasswordTransformer() })
  password: string;

  /**
   * phone number of a user
   */
  @Column({ nullable: true })
  phone: string;

  /**
   * avatar of a user
   */
  @Column({ nullable: true })
  avatar: string;

  /**
   * city of user
   */
  @Column({ nullable: true })
  city: string;

  /**
   * extracting `UserDto` into `dtoClass`
   */
  dtoClass = UserDto;
}
