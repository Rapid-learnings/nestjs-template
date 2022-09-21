import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

/**
 * request DTO with user credentials for login
 * @author Afzal Mansuri
 */
export class UserLoginDto {
  /**
   * email of a user
   */
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  /**
   * password of a user
   */
  @IsString()
  @ApiProperty()
  password: string;
}
