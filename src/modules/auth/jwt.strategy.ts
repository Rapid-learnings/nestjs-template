import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserService } from '../user/user.service';

/**
 * jwtStrategy for user authentication using passport method
 * 
 * @author Afzal Mansuri
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    public readonly configService: ConfigService,
    public readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secret: configService.get('JWT_SECRET_KEY'),
    });
  }

  /**
   * This will generate token for user with calculation for when user is created and 
   * that time plus when should be generated token should be expiredIn
   * @param {iat, exp,userId}  `destructuring` to validate paramaters for understanding purpose  => iat:initializedAt,exp:expire,userId: id of a user
   * @returns  {user with token} user with token
   */
  async validate({ iat, exp, id: userId }) {
    const timeDiff = exp - iat;
    if (timeDiff <= 0) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findOne(userId);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
