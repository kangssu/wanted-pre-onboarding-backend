import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/feature/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
      ignoreExpiration: false,
    });
  }

  async validate(
    payload: any,
  ): Promise<Omit<User, 'password' | 'createdAt' | 'deletedAt'>> {
    const user: Omit<User, 'password' | 'createdAt' | 'deletedAt'> =
      await this.userService.getUserByUserById(payload.id);
    if (user) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        nickname: user.nickname,
      };
    } else {
      throw new UnauthorizedException('User Not Found');
    }
  }
}
