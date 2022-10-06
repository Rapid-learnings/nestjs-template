import { ApiProperty } from '@nestjs/swagger';

import { UserDto } from '../../user/dto/UserDto';
import { TokenPayloadDto } from './TokenPayloadDto';

/**
 * `DataTransferObject`
 * for   `Login` activity api-enpoints
 * to provind auhtentication facility to the user
 */
export class LoginPayloadDto {
  /**
   * userDto as an object for login
   */
  @ApiProperty({ type: UserDto })
  user: UserDto;

  /**
   * token generated when user login successfull
   */
  @ApiProperty({ type: TokenPayloadDto })
  token: TokenPayloadDto;

  /**
   * Provides user and token info as intances of it's DTO's
   * @param user provides
   * @param token provides blueprint of `TokenPayloadDto` after login   
   */
  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
