import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UserDto } from '../user/dto/UserDto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { TokenPayloadDto } from './dto/TokenPayloadDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserNotFoundException } from '../../shared/exceptions/user-not-found.exception';
import { UtilsService } from '../../shared/providers/utils.service';


/**
 * This service contain contains all methods and business logic for authentication.
 * @author Afzal Mansuri
 */
@Injectable()
export class AuthService {
  /**
   * This constructor contain necessary services to fulfill AuthService needs 
   * @param jwtService provide jwtService to to AuthService
   * @param configService provides configServices to AuthService
   * @param userService provides userServices to AuthService
   */
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
  ) {}

  /**
   * This method wil assign a token to a perticular user who want to login
   * @param user user information of currently logged in 
   * @returns token with expirationTime
   */
  async createToken(user: UserEntity | UserDto): Promise<TokenPayloadDto> {
    return new TokenPayloadDto({
      expiresIn: this.configService.get('JWT_EXPIRATION_TIME'),
      accessToken: await this.jwtService.signAsync({ id: user.id }),
    });
  }

  /**
   * This method is validates a user if user exists on `USER`'s schema
   * @param userLoginDto contains user information the need when login
   * @returns {user} user object as it's information
   */
  async validateUser(userLoginDto: UserLoginDto): Promise<UserEntity> {
    const user = await this.userService.findOne({
      email: userLoginDto.email,
    });
    const isPasswordValid = await UtilsService.validateHash(
      userLoginDto.password,
      user && user.password,
    );
    if (!user || !isPasswordValid) {
      throw new UserNotFoundException();
    }
    return user;
  }
}
