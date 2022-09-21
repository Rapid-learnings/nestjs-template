import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { UserDto } from '../user/dto/UserDto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { SentryInterceptor } from '../../shared/interceptors/sentry-interceptor';
import HttpCreatedResponse from '../../shared/http/created.http';
import HttpResponse from '../../shared/http/response.http';
import HttpOkResponse from '../../shared/http/ok.http';

/**
 * AuthController is responsible for handling incoming requests specific to User and returning responses to the client.
 * It creates a route - "/auth"
 * @author Afzal Mansuri
 */
@UseInterceptors(SentryInterceptor)
@Controller('auth')
export class AuthController {
  constructor(
    public readonly userService: UserService,
    public readonly authService: AuthService,
  ) {}

  /**
   * POST API - "/login" - user get authorized to  or authenticate himself
   * @param UserLoginDto constains user data for login
   * @returns returns user token with expiration time
   * @throws UnauthorizedException in case user is not login information||creadentials are not matched.
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: LoginPayloadDto,
    description: 'User info with access token',
  })
  async userLogin(@Body() userLoginDto: UserLoginDto): Promise<HttpResponse> {
    const userEntity = await this.authService.validateUser(userLoginDto);

    const token = await this.authService.createToken(userEntity);

    const authData = new LoginPayloadDto(userEntity.toDto(), token);
    return new HttpOkResponse(authData);
  }


  /**
   * POST API - "/register" - user creates his profile | account
   * @param UserDto constains user data for login
   * @returns returns user object
   */
  @Post('register')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
  async userRegister(
    @Body() userRegisterDto: UserRegisterDto,
  ): Promise<HttpCreatedResponse> {
    const createdUser = await this.userService.createUser(userRegisterDto);

    const user = createdUser.toDto();
    return new HttpCreatedResponse({ user });
  }
}
