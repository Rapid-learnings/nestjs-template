import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';

/**
 * request DTO for user creation on `user registration` api-endipoints
 */
export class UserRegisterDto {
  /**
   * firstName for a user
   */
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;

  /**
   * lastName for a user
   */
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  /**
   * email for a user
   */
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  /**
   * password for a user
   */
  @IsString()
  @MinLength(6)
  @ApiProperty({ minLength: 6 })
  readonly password: string;

  /**
   * phone number for a user
   */
  @Column()
  @IsPhoneNumber()
  @IsOptional()
  @ApiProperty()
  phone: string;
}
