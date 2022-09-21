import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

/**
 * request DTO for interactions on userServices api-enpoints 
 * @author Afzal Mansuri
 */
export class UserDto extends AbstractDto {
  /**
   * firstName of a user
   */
  @ApiPropertyOptional()
  firstName: string;

  /**
   * lastName of a user
   */
  @ApiPropertyOptional()
  lastName: string;

  /**
   * lastName of a user
   */
  @ApiPropertyOptional()
  username: string;

  /**
   * Role of a user
   * @default USER value will be USER if no role provided by user
   */
  @ApiPropertyOptional({ enum: RoleType })
  role: RoleType;

  /**
   * email of a user
   */
  @ApiPropertyOptional()
  email: string;

  /**
   * avatar of a user
   */
  @ApiPropertyOptional()
  avatar: string;

  /**
   * phone number of user
   */
  @ApiPropertyOptional()
  phone: string;

  /**
   * @param user `UserEntity` as an object
   */
  constructor(user: UserEntity) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
    this.email = user.email;
    this.avatar = user.avatar;
    this.phone = user.phone;
  }
}
