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

@UseInterceptors(SentryInterceptor)
@Controller('auth')
export class AuthController {
  constructor(
    public readonly userService: UserService,
    public readonly authService: AuthService,
  ) {}

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
